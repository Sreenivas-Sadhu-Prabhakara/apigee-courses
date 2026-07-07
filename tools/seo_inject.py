#!/usr/bin/env python3
"""Idempotent SEO injector for the apigee-courses GitHub Pages site.

Injects, inside a managed <!-- SEO:START -->...<!-- SEO:END --> block placed just
before </head>: canonical, description, keywords, robots, author, favicon (if missing),
Open Graph, Twitter Card, and JSON-LD structured data. Also writes sitemap.xml + robots.txt.

Re-running replaces the managed block (and strips stray pre-existing SEO tags), so it is safe
to run repeatedly.
"""
import json, os, glob, re, html, sys

import datetime as _dt
_HERE  = os.path.dirname(os.path.abspath(__file__))
ROOT   = os.path.dirname(_HERE)                 # repo root (this file lives in <root>/tools/)
BASE   = "https://sreenivas-sadhu-prabhakara.github.io/apigee-courses"
SITE   = "Apigee X Training Hub"
AUTHOR = "Sreenivas Sadhu Prabhakara"
TODAY  = _dt.date.today().isoformat()
DESC_FILE = os.path.join(_HERE, "seo_descriptions.json")

COURSES = {
 "fapi-30-day":       {"name":"30-Day Apigee X: Open Banking & FAPI","og":"og-fapi.png","workload":"PT30H","level":["Intermediate","Advanced"]},
 "spring-boot-devs":  {"name":"Apigee X for Spring Boot Developers","og":"og-spring.png","workload":"PT33H","level":["Intermediate"]},
 "tetrate-ai-gateway":{"name":"Tetrate AI Gateway for Apigee & Java Developers","og":"og-tetrate.png","workload":"PT29H","level":["Intermediate","Advanced"]},
 "mastery":           {"name":"Apigee Mastery Program","og":"og-mastery.png","workload":"PT21H","level":["Beginner","Intermediate","Advanced"]},
}
HUB_OG = "og-hub.png"

DESC = json.load(open(DESC_FILE))

def attr(s):
    return (s.replace("&","&amp;").replace('"',"&quot;").replace("<","&lt;").replace(">","&gt;"))

def jsonld(obj):
    s = json.dumps(obj, ensure_ascii=False, separators=(",",":"))
    # neutralize any HTML-significant chars so the <script> can never break out
    return s.replace("<","\\u003c").replace(">","\\u003e").replace("&","\\u0026")

def get_title(text):
    m = re.search(r"<title>(.*?)</title>", text, re.DOTALL|re.IGNORECASE)
    return m.group(1).strip() if m else SITE

def url_for(rel):
    base = os.path.basename(rel); d = os.path.dirname(rel)
    if base == "index.html":
        return BASE + "/" if d == "" else BASE + "/" + d + "/"
    return BASE + "/" + rel

def classify(rel):
    d = os.path.dirname(rel)
    if rel == "index.html": return ("hub", None)
    if os.path.basename(rel) == "index.html" and d in COURSES: return ("courseIndex", d)
    return ("lesson", d)

def crumb(items):
    return {"@type":"BreadcrumbList","itemListElement":[
        {"@type":"ListItem","position":i+1,"name":n,"item":u} for i,(n,u) in enumerate(items)]}

GITHUB     = "https://github.com/Sreenivas-Sadhu-Prabhakara"
ORG_INLINE = {"@type":"Organization","name":SITE,"url":BASE+"/","sameAs":[GITHUB],
              "logo":{"@type":"ImageObject","url":BASE+"/assets/og/logo.png","width":1200,"height":1200}}
PERSON     = {"@type":"Person","name":AUTHOR,"url":GITHUB}

def build_jsonld(kind, course, rel, url, text_title, desc, keywords):
    if kind == "hub":
        items=[{"@type":"ListItem","position":i+1,"url":BASE+"/"+c+"/","name":COURSES[c]["name"]}
               for i,c in enumerate(COURSES)]
        graph=[
          {"@type":"WebSite","@id":BASE+"/#website","name":SITE,"url":BASE+"/",
           "description":desc,"inLanguage":"en","publisher":ORG_INLINE},
          {"@type":"CollectionPage","@id":url+"#webpage","url":url,"name":text_title,
           "isPartOf":{"@id":BASE+"/#website"},"description":desc,"inLanguage":"en"},
          {"@type":"ItemList","name":"Apigee X training courses","itemListElement":items},
        ]
    elif kind == "courseIndex":
        c=COURSES[course]; cu=BASE+"/"+course+"/"
        graph=[
          {"@type":"Course","@id":cu+"#course","name":c["name"],"description":desc,"url":cu,
           "provider":ORG_INLINE,"author":PERSON,"inLanguage":"en","isAccessibleForFree":True,
           "dateModified":TODAY,"educationLevel":c["level"],
           "about":keywords,
           "offers":{"@type":"Offer","category":"Free","price":"0","priceCurrency":"USD",
                     "availability":"https://schema.org/InStock"},
           "hasCourseInstance":{"@type":"CourseInstance","courseMode":"Online",
                     "courseWorkload":c["workload"],"instructor":PERSON}},
          crumb([("Home",BASE+"/"),(c["name"],cu)]),
        ]
    else:  # lesson
        c=COURSES[course]; cu=BASE+"/"+course+"/"
        leaf = text_title.split(" · ")[0].strip()
        graph=[
          {"@type":"LearningResource","@id":url+"#lesson","name":text_title,"description":desc,"url":url,
           "inLanguage":"en","isAccessibleForFree":True,"dateModified":TODAY,"learningResourceType":"lesson",
           "teaches":keywords,"author":PERSON,"provider":ORG_INLINE,
           "isPartOf":{"@type":"Course","@id":cu+"#course","name":c["name"],"url":cu}},
          crumb([("Home",BASE+"/"),(c["name"],cu),(leaf,url)]),
        ]
    return {"@context":"https://schema.org","@graph":graph}

# ---- managed-tag stripping (idempotency) ----
BLOCK_RE = re.compile(r"[ \t]*<!-- SEO:START.*?<!-- SEO:END -->\n?", re.DOTALL)
STRAY = [
  re.compile(r"[ \t]*<meta\s[^>]*name=[\"']description[\"'][^>]*>\n?", re.IGNORECASE),
  re.compile(r"[ \t]*<meta\s[^>]*name=[\"']keywords[\"'][^>]*>\n?", re.IGNORECASE),
  re.compile(r"[ \t]*<meta\s[^>]*name=[\"']robots[\"'][^>]*>\n?", re.IGNORECASE),
  re.compile(r"[ \t]*<meta\s[^>]*name=[\"']author[\"'][^>]*>\n?", re.IGNORECASE),
  re.compile(r"[ \t]*<link\s[^>]*rel=[\"']canonical[\"'][^>]*>\n?", re.IGNORECASE),
  re.compile(r"[ \t]*<meta\s[^>]*property=[\"']og:[^>]*>\n?", re.IGNORECASE),
  re.compile(r"[ \t]*<meta\s[^>]*name=[\"']twitter:[^>]*>\n?", re.IGNORECASE),
  re.compile(r"[ \t]*<script\s[^>]*type=[\"']application/ld\+json[\"'][^>]*>.*?</script>\n?", re.DOTALL|re.IGNORECASE),
]

def clean_head(head):
    head = BLOCK_RE.sub("", head)
    for r in STRAY: head = r.sub("", head)
    return head

def build_block(rel, has_favicon, favicon_href):
    kind, course = classify(rel)
    url = url_for(rel)
    raw = open(os.path.join(ROOT, rel), encoding="utf-8").read()
    raw_title = get_title(raw)
    text_title = html.unescape(raw_title)
    meta = DESC.get(rel)
    if meta:
        desc = meta["description"].strip()
        keywords = meta.get("keywords", [])
    else:
        # graceful fallback for pages not in the descriptions file (e.g. newly added
        # days/sessions after a rebuild): keep SEO complete, derived from the title.
        leaf = html.unescape(raw_title).split(" · ")[0].strip()
        ctx = COURSES[course]["name"] if course in COURSES else SITE
        desc = (leaf + " — " + ctx + ".")[:160]
        keywords = []
        print("  (fallback description) " + rel)
    og_img = BASE + "/assets/og/" + (HUB_OG if kind=="hub" else COURSES[course]["og"])
    og_type = "article" if kind=="lesson" else "website"

    L=["  <!-- SEO:START (managed by seo_inject.py) -->"]
    L.append(f'  <link rel="canonical" href="{url}">')
    L.append(f'  <meta name="description" content="{attr(desc)}">')
    if keywords:
        L.append(f'  <meta name="keywords" content="{attr(", ".join(keywords))}">')
    L.append(f'  <meta name="author" content="{attr(AUTHOR)}">')
    L.append('  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">')
    if not has_favicon:
        L.append(f'  <link rel="icon" href="{favicon_href}">')
    # Open Graph
    L.append(f'  <meta property="og:type" content="{og_type}">')
    L.append(f'  <meta property="og:site_name" content="{attr(SITE)}">')
    L.append(f'  <meta property="og:title" content="{raw_title}">')
    L.append(f'  <meta property="og:description" content="{attr(desc)}">')
    L.append(f'  <meta property="og:url" content="{url}">')
    L.append(f'  <meta property="og:image" content="{og_img}">')
    L.append('  <meta property="og:image:width" content="1200">')
    L.append('  <meta property="og:image:height" content="630">')
    L.append(f'  <meta property="og:image:alt" content="{attr(text_title)}">')
    L.append('  <meta property="og:locale" content="en_US">')
    # Twitter
    L.append('  <meta name="twitter:card" content="summary_large_image">')
    L.append(f'  <meta name="twitter:title" content="{raw_title}">')
    L.append(f'  <meta name="twitter:description" content="{attr(desc)}">')
    L.append(f'  <meta name="twitter:image" content="{og_img}">')
    # JSON-LD
    ld = build_jsonld(kind, course, rel, url, text_title, desc, keywords)
    L.append(f'  <script type="application/ld+json">{jsonld(ld)}</script>')
    L.append("  <!-- SEO:END -->")
    return "\n".join(L)

FAV_RE = re.compile(r"<link[^>]+rel=[\"']icon[\"'][^>]*>", re.IGNORECASE)
# quote-aware: the data: URI may itself contain single quotes, so match the closing quote
# that mirrors the opening one via a backreference rather than any quote char.
FAV_HREF_RE = re.compile(r"<link[^>]+rel=[\"']icon[\"'][^>]*href=([\"'])(.*?)\1", re.IGNORECASE)

def process(rel, favicon_href):
    path = os.path.join(ROOT, rel)
    text = open(path, encoding="utf-8").read()
    m = re.search(r"(<head[^>]*>)(.*?)(</head>)", text, re.DOTALL|re.IGNORECASE)
    if not m:
        print("  !! no <head> in", rel); return False
    open_tag, head, close_tag = m.group(1), m.group(2), m.group(3)
    head = clean_head(head)
    # detect a favicon only AFTER stripping our managed block, so a favicon that
    # lives *inside* the block (added on a prior run) doesn't suppress re-adding it.
    has_favicon = bool(FAV_RE.search(head))
    block = build_block(rel, has_favicon, favicon_href)
    # ensure single newline before </head>
    head = head.rstrip("\n") + "\n" + block + "\n"
    new = text[:m.start()] + open_tag + head + close_tag + text[m.end():]
    if new != text:
        open(path,"w",encoding="utf-8").write(new)
    return True

def main():
    files = sorted(f for f in glob.glob(os.path.join(ROOT,"**/*.html"),recursive=True)
                   if "/.git/" not in f)
    rels = [os.path.relpath(f, ROOT) for f in files]
    # favicon href reused from hub index.html
    hub = open(os.path.join(ROOT,"index.html"),encoding="utf-8").read()
    fm = FAV_HREF_RE.search(hub)
    favicon_href = fm.group(2) if fm else ""
    ok=0
    for rel in rels:
        if process(rel, favicon_href): ok+=1
    print(f"processed {ok}/{len(rels)} html files")

    # sitemap.xml
    def prio_freq(rel):
        kind,_=classify(rel)
        return ("1.0" if kind=="hub" else "0.9" if kind=="courseIndex" else "0.7","monthly")
    urls=[]
    for rel in rels:
        u=url_for(rel); p,f=prio_freq(rel)
        urls.append((u,p,f))
    sm=['<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    for u,p,f in urls:
        sm+=["  <url>",f"    <loc>{u}</loc>",f"    <lastmod>{TODAY}</lastmod>",
             f"    <changefreq>{f}</changefreq>",f"    <priority>{p}</priority>","  </url>"]
    sm.append("</urlset>")
    open(os.path.join(ROOT,"sitemap.xml"),"w").write("\n".join(sm)+"\n")
    print(f"wrote sitemap.xml with {len(urls)} urls")

    # robots.txt
    robots=("User-agent: *\nAllow: /\n\nSitemap: "+BASE+"/sitemap.xml\n")
    open(os.path.join(ROOT,"robots.txt"),"w").write(robots)
    print("wrote robots.txt")

if __name__=="__main__":
    main()
