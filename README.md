# Apigee Training

Course hub for **Apigee X** — hands-on, self-paced training, served as a static
site via GitHub Pages.

## Structure

```
apigee-training/
├── index.html            # hub landing — lists the courses
├── assets/styles.css     # hub landing styles
├── fapi-30-day/          # 30-Day Apigee X Training (UK Open Banking / FAPI)
├── spring-boot-devs/     # Apigee X for Spring Boot Developers
├── tetrate-ai-gateway/   # Tetrate / Envoy AI Gateway for Apigee & Java Developers
└── mastery/              # Apigee X Mastery Program
```

Each course folder is a **built static site** copied from its source repository.
Every course is self-contained (its own assets/theme) and uses relative links, so it
works unchanged from a subfolder.

## Sources & updating

Three courses are authored and built in their **own repositories** (`build.py` renders
`content/` → `docs/`); `mastery/` is the flat `APIGEE-Training` repo. The source repos
remain the editable source of truth. After rebuilding a course in its source repo,
refresh the copies here with:

```bash
./tools/sync.sh      # source repos are expected as siblings of this repo
```

## Scope

This repository is for hands-on Apigee X **training courses**. Reference
documentation is maintained in a **separate** docs repository.
