const curriculum = [
  {
    day: 1,
    type: "build",
    title: "REST, RFCs, and API architecture",
    focus: "Roy Fielding's REST constraints, HTTP RFC 9110, URI RFC 3986, and the three-tier API model",
    outcomes: ["Explain REST as an architectural style", "Map HTTP methods and status codes to RFC semantics", "Draw the experience, Apigee, and backend tiers"],
    lab: "Review a weak API design, identify REST mismatches, and redesign /getAccountData into /accounts/{accountId}.",
    practice: "Create a one-page resource model with methods, status codes, cache notes, and tier ownership for each decision.",
    artifact: "REST and three-tier architecture worksheet"
  },
  {
    day: 2,
    type: "ops",
    title: "Complete Apigee X setup day",
    focus: "Provisioning path, project readiness, APIs, IAM, org, environment, environment group, runtime, and hostname",
    outcomes: ["Choose eval vs paid provisioning path", "Validate Google Cloud project and IAM prerequisites", "Create the runtime surface learners will deploy into"],
    lab: "Walk through Apigee X setup using the console path or documented command-line path, then verify org, env, env group, and hostname readiness.",
    practice: "Each learner completes the setup checklist, captures verification commands, and records project/org/env/host values in their shell profile.",
    artifact: "Apigee X setup evidence pack"
  },
  {
    day: 3,
    type: "build",
    title: "Local development and bundle structure",
    focus: "Source-controlled proxy bundles and deployable Apigee artifacts",
    outcomes: ["Create apiproxy folders", "Edit XML safely", "Deploy with repeatable commands"],
    lab: "Scaffold banking-accounts-v1 and deploy the first revision into the Day 2 environment.",
    practice: "Repeat scaffold, deploy, revise, redeploy, and smoke-test until learners can do it without instructor prompts.",
    artifact: "Working proxy bundle"
  },
  {
    day: 4,
    type: "build",
    title: "Proxy endpoints, flows, and routing",
    focus: "Request matching, REST resources, and backend abstraction",
    outcomes: ["Use MatchesPath conditions", "Separate verbs and resources", "Design route rules"],
    lab: "Add /accounts, /balances, /transactions, and /metadata resources with distinct flow conditions.",
    practice: "Write curl calls for each route, intentionally hit an unsupported method, and document the expected 404/405 behavior.",
    artifact: "Flow map and route test set"
  },
  {
    day: 5,
    type: "security",
    title: "API keys, products, and low-security APIs",
    focus: "App identity, product onboarding, and low-risk gateway hygiene",
    outcomes: ["Create API product model", "Validate x-api-key", "Connect app identity to analytics"],
    lab: "Protect the low-risk metadata endpoint with VerifyAPIKey, CORS, and a small quota.",
    practice: "Call with no key, bad key, valid key, and exceeded quota; capture the response and trace decision for each.",
    artifact: "Low-security pattern"
  },
  {
    day: 6,
    type: "review",
    title: "Clinic: debug and proxy anatomy",
    focus: "Trace, variables, peer review, and first refactor",
    outcomes: ["Read flow variables", "Trace policy execution", "Standardize correlation IDs"],
    lab: "Break three routes or policies and diagnose each failure from trace evidence.",
    practice: "Pair learners: one introduces a fault, the other finds it using trace, variables, and curl evidence.",
    artifact: "Troubleshooting worksheet"
  },
  {
    day: 7,
    type: "review",
    title: "Consolidation day",
    focus: "Self-paced repair and reading",
    outcomes: ["Re-run labs", "Clean commits", "Prepare questions"],
    lab: "No new build; learners harden their week 1 repository.",
    practice: "Recreate the proxy in a clean folder, compare diffs, and write five questions for week 2.",
    artifact: "Week 1 checkpoint"
  },
  {
    day: 8,
    type: "security",
    title: "OAuth 2.0 in Apigee",
    focus: "Tokens, scopes, products, and app context",
    outcomes: ["Verify bearer tokens", "Enforce scopes", "Explain app/developer variables"],
    lab: "Protect partner accounts endpoint with OAuthV2 VerifyAccessToken.",
    practice: "Run positive and negative tests for missing token, malformed token, bad scope, and valid token.",
    artifact: "Medium-security pattern"
  },
  {
    day: 9,
    type: "security",
    title: "JWT validation and external IdPs",
    focus: "Issuer, audience, algorithm, JWKS",
    outcomes: ["Validate external JWTs", "Reject weak assumptions", "Map claims to decisions"],
    lab: "Use VerifyJWT with a mock JWKS and negative tests.",
    practice: "Generate or inspect sample JWTs, then test wrong issuer, wrong audience, expired token, and missing scope.",
    artifact: "JWT threat checklist"
  },
  {
    day: 10,
    type: "security",
    title: "Traffic management",
    focus: "Quota vs spike arrest",
    outcomes: ["Choose counters by purpose", "Protect bursts", "Model product entitlements"],
    lab: "Add partner quota and burst smoothing; load test expected responses.",
    practice: "Run a small loop that triggers burst protection, then a quota threshold; explain why the policies behave differently.",
    artifact: "Rate-limit decision table"
  },
  {
    day: 11,
    type: "build",
    title: "Mediation and transformation",
    focus: "AssignMessage, ExtractVariables, JavaScript",
    outcomes: ["Normalize headers", "Extract path and payload values", "Avoid leaking backend shape"],
    lab: "Transform backend response into the public contract.",
    practice: "Trace before and after variables, remove backend-only headers, and verify the public response contract stays stable.",
    artifact: "Mediation cookbook"
  },
  {
    day: 12,
    type: "ops",
    title: "Shared flows and reusable controls",
    focus: "Platform guardrails",
    outcomes: ["Package common policy sequences", "Design flow hooks", "Version shared controls"],
    lab: "Create low, medium, and high shared flow skeletons.",
    practice: "Apply a shared flow to two endpoints, change it once, redeploy, and prove both endpoints inherited the behavior.",
    artifact: "Shared flow catalog"
  },
  {
    day: 13,
    type: "review",
    title: "Clinic: abuse cases",
    focus: "Threat modeling with working code",
    outcomes: ["Attack payload size", "Attack missing scope", "Attack missing consent"],
    lab: "Run negative tests and write the fix plan.",
    practice: "Each team owns one abuse scenario and writes the failing request, expected policy failure, and remediation.",
    artifact: "Abuse-case evidence"
  },
  {
    day: 14,
    type: "review",
    title: "Consolidation day",
    focus: "Refactor and document",
    outcomes: ["Clean shared flow naming", "Update README", "Prepare high-security week"],
    lab: "No new build; learners stabilize week 2 assets.",
    practice: "Run the full regression script, fix flaky tests, and document every endpoint with required headers and errors.",
    artifact: "Week 2 checkpoint"
  },
  {
    day: 15,
    type: "security",
    title: "Open banking security patterns",
    focus: "FAPI-style API protection",
    outcomes: ["Explain PAR, JAR, JARM, PKCE, mTLS, DPoP", "Separate AS and gateway responsibilities", "Design fail-closed controls"],
    lab: "Add consent, claim, and resource checks to the high-security flow.",
    practice: "Map each high-security control to a threat: replay, token theft, consent bypass, injection, quota abuse, or audit failure.",
    artifact: "High-security pattern"
  },
  {
    day: 16,
    type: "security",
    title: "mTLS, DPoP, and sender constraints",
    focus: "Replay resistance and token binding",
    outcomes: ["Compare mTLS and DPoP", "Capture certificate signals", "Document operational trade-offs"],
    lab: "Implement gateway-side checks that support a sender-constrained token design.",
    practice: "Write an ADR choosing mTLS or DPoP for a partner scenario and list the operational failure modes.",
    artifact: "Sender constraint ADR"
  },
  {
    day: 17,
    type: "ops",
    title: "Enterprise Apigee X networking",
    focus: "CDN decisions, load balancing, allowlists, denylists, and where Apigee sits",
    outcomes: ["Draw the enterprise traffic path", "Place CDN and load-balancing controls", "Configure API-specific allowlist or denylist policy"],
    lab: "Map DNS, CDN, Cloud Load Balancing, Apigee X, target servers, backends, and observability for the banking platform.",
    practice: "Mark which endpoints can use CDN, where broad IP controls belong, and where Apigee-specific AccessControl belongs.",
    artifact: "Enterprise networking diagram"
  },
  {
    day: 18,
    type: "ops",
    title: "CI/CD and release discipline",
    focus: "Deployments, environments, rollback",
    outcomes: ["Automate deploy", "Promote config", "Plan rollback"],
    lab: "Create a CI pipeline and deploy to a non-production environment.",
    practice: "Perform one successful deploy, one intentionally failed deploy, and one rollback drill with documented commands.",
    artifact: "Pipeline and runbook"
  },
  {
    day: 19,
    type: "ops",
    title: "Observability and incident drills",
    focus: "Analytics, logging, and support signals",
    outcomes: ["Design useful logs", "Avoid secret leakage", "Triage 401/403/429/5xx"],
    lab: "Run an incident scenario and produce a timeline.",
    practice: "Given a failing request ID, reconstruct the path through client, Apigee policy, target, logs, and analytics.",
    artifact: "Incident report"
  },
  {
    day: 20,
    type: "build",
    title: "Developer experience and graduation package",
    focus: "Products, specs, onboarding, docs, and final proxy evidence",
    outcomes: ["Publish API contract", "Explain product plans", "Write getting-started docs"],
    lab: "Create portal-ready documentation, OpenAPI security schemes, and test scripts for the graduation proxy.",
    practice: "Onboard a fresh learner as a developer, call the API, and package the final evidence.",
    artifact: "DX and graduation pack"
  },
  {
    day: 21,
    type: "review",
    title: "Graduation proxy integration",
    focus: "Tie REST, setup, policies, networking, CI/CD, observability, and DX into one system",
    outcomes: ["Present architecture", "Demo live flows", "Answer incident and compliance questions"],
    lab: "Build and defend banking-platform-v1 with /metadata low security, /partners/accounts medium security, and /accounts high security.",
    practice: "Run the full graduation test pack and explain every policy placement, network decision, and production-readiness trade-off.",
    artifact: "Graduation proxy decision"
  }
];

const dayDetails = {
  1: {
    concept: "Start with the architecture before touching a policy. REST gives the contract discipline, HTTP and URI RFCs give the protocol vocabulary, and the three-tier model tells learners where responsibility belongs.",
    previous: "This is the entry point. Learners begin with business capabilities and turn them into stable API resources.",
    next: "Day 2 provisions the Apigee X runtime that will host the resource model created today.",
    visual: ["Business capability", "REST resource", "HTTP method", "Apigee proxy", "Backend service"],
    policyFlow: [
      ["No policy yet", "Keep Day 1 conceptual so learners do not confuse protocol design with gateway configuration."],
      ["Design checkpoint", "Every later policy must protect or preserve the REST contract, not compensate for a bad resource model."]
    ],
    concepts: ["REST constraints from Fielding: client-server, stateless, cacheable, uniform interface, layered system, optional code on demand.", "RFC 9110: method semantics, status codes, representations, headers, caching, and the http/https schemes.", "RFC 3986: URI structure, path hierarchy, query strings, percent encoding, and why secrets do not belong in URLs.", "Three-tier architecture: clients and channels, Apigee/API management, backend services and data."],
    bestConfig: ["Use nouns for resources and HTTP methods for actions.", "Keep Apigee in the API management tier: security, mediation, routing, analytics, traffic controls.", "Keep system-of-record state and business transactions in backend services.", "Write status-code rules before writing proxy XML."],
    snippets: [
      ["REST resource design review", "# Candidate capability: show account balance\nGET /accounts/{accountId}/balances\n200: balance returned\n401: no valid token\n403: token valid but lacks account consent\n404: account not visible to caller\n429: quota or burst control triggered\n\n# Avoid\nGET /getAccountBalance?accountId=123&token=secret"]
    ],
    practice: ["Convert five action-style endpoints into resource-style endpoints.", "Draw the three-tier architecture for the banking API.", "Write the expected status code for each happy-path and failure-path response.", "Record which tier owns identity, consent, quota, logging, and core business authorization."],
    validate: ["Resource names are nouns.", "No secrets in URLs.", "Each method has clear semantics.", "Every failure has a planned status code.", "Tier ownership is explicit."]
  },
  2: {
    concept: "Provision Apigee X deliberately. Learners need to understand organization, environment, environment group, runtime, hostname, network path, IAM, and how external traffic reaches the runtime.",
    previous: "Uses the Day 1 resource model to know what the runtime will eventually expose.",
    next: "Day 3 deploys the first source-controlled proxy into the environment created today.",
    visual: ["Google Cloud project", "Apigee org", "Runtime instance", "Environment group", "Hostname", "First health check"],
    policyFlow: [
      ["No runtime policy yet", "Platform setup comes first; policies need a stable org, env, hostname, and deploy path."],
      ["Access boundary", "Decide external vs internal access before learners test public endpoints."]
    ],
    concepts: ["Apigee organization: top-level API management container.", "Environment: runtime deployment boundary for proxies and shared flows.", "Environment group: hostname binding for one or more environments.", "External access: Google Cloud load balancing path can expose Apigee runtime to clients.", "Private access: PSC or VPC options keep traffic internal depending on provisioning model."],
    bestConfig: ["Use a non-production environment for training.", "Use least-privilege IAM roles for deployers.", "Capture setup evidence because most hands-on problems are environment or hostname problems.", "Use a predictable hostname such as api-training.example.com or an automatically managed test domain."],
    snippets: [
      ["Setup verification shell", "export PROJECT_ID=\"your-project\"\nexport APIGEE_ORG=\"your-org\"\nexport APIGEE_ENV=\"eval\"\nexport APIGEE_HOST=\"https://api.example.com\"\n\ngcloud auth login\ngcloud config set project \"$PROJECT_ID\"\ngcloud services enable apigee.googleapis.com compute.googleapis.com cloudresourcemanager.googleapis.com\ncurl -s -H \"Authorization: Bearer $(gcloud auth print-access-token)\" \"https://apigee.googleapis.com/v1/organizations/$APIGEE_ORG\""],
      ["Evidence log", "project_id=\napigee_org=\nruntime_region=\nenvironment=\nenvironment_group=\nhostname=\naccess_type=external|internal\nfirst_successful_health_check=\nopen_issues="]
    ],
    practice: ["Complete provisioning using console or documented command path.", "Verify org and environment API responses.", "Confirm hostname routing with a health or hello proxy if available.", "Write down every value needed by later labs."],
    validate: ["Apigee API enabled.", "Org visible.", "Environment visible.", "Hostname documented.", "Learner can obtain access token.", "Deploy permissions confirmed."]
  },
  3: {
    concept: "Build a deployable proxy bundle. Learners move from platform setup to source-controlled Apigee configuration.",
    previous: "Uses the Day 2 org, environment, hostname, and shell profile.",
    next: "Day 4 adds RESTful flows and route rules to the bundle.",
    visual: ["Repository", "apiproxy", "ProxyEndpoint", "TargetEndpoint", "Deploy", "Smoke test"],
    policyFlow: [
      ["PreFlow", "Common request controls will eventually go here; today it stays minimal."],
      ["TargetEndpoint", "Backend abstraction begins here, even when the first backend is httpbin or a mock."]
    ],
    concepts: ["ProxyEndpoint defines the client-facing API surface.", "TargetEndpoint defines where Apigee sends traffic after policy execution.", "PreFlow runs before conditional flows and is used for common behavior.", "A proxy bundle is infrastructure-as-code for API management."],
    bestConfig: ["Keep proxy names lowercase and versioned, such as banking-platform-v1.", "Commit every working revision.", "Use one smoke test per route from the beginning.", "Do not hard-code production backend hosts into learner proxies."],
    snippets: [
      ["Proxy skeleton", "mkdir -p banking-platform-v1/apiproxy/{proxies,targets,policies,resources/jsc}\ncd banking-platform-v1\ncat > README.md <<'README'\n# banking-platform-v1\nSelf-paced Apigee training proxy.\nREADME"],
      ["Minimal ProxyEndpoint", "<ProxyEndpoint name=\"default\">\n  <PreFlow name=\"PreFlow\"><Request/><Response/></PreFlow>\n  <HTTPProxyConnection><BasePath>/banking/v1</BasePath></HTTPProxyConnection>\n  <RouteRule name=\"default\"><TargetEndpoint>default</TargetEndpoint></RouteRule>\n</ProxyEndpoint>"]
    ],
    practice: ["Create the folder structure.", "Add minimal proxy and target endpoint XML.", "Deploy revision 1.", "Call the base path and capture response headers."],
    validate: ["Bundle deploys.", "Base path is correct.", "Target responds.", "Repository has a clean commit."]
  },
  4: {
    concept: "Route by resource and method. This is where REST design becomes executable Apigee flow logic.",
    previous: "Extends the Day 3 proxy skeleton.",
    next: "Day 5 protects the lowest-risk endpoint with API key and product configuration.",
    visual: ["GET /metadata", "GET /accounts", "GET /balances", "POST /payments", "RouteRule", "Target"],
    policyFlow: [
      ["Proxy PreFlow", "Use for controls that apply to every request."],
      ["Conditional Flow", "Use when behavior belongs to one REST resource or method."],
      ["RouteRule", "Use after request policies decide the target path."]
    ],
    concepts: ["Flow conditions are the bridge between HTTP semantics and Apigee execution.", "MatchesPath lets one proxy host multiple resource paths.", "Unsupported methods should fail predictably instead of drifting to backend behavior."],
    bestConfig: ["Use one flow per resource/method when behavior differs.", "Name flows like GET /accounts for readability.", "Keep route rules simple until target selection truly varies.", "Document 404 and 405 behavior."],
    snippets: [
      ["Resource flows", "<Flows>\n  <Flow name=\"GET metadata\">\n    <Condition>(proxy.pathsuffix MatchesPath \"/metadata\") and (request.verb = \"GET\")</Condition>\n  </Flow>\n  <Flow name=\"GET accounts\">\n    <Condition>(proxy.pathsuffix MatchesPath \"/accounts\") and (request.verb = \"GET\")</Condition>\n  </Flow>\n  <Flow name=\"POST payments\">\n    <Condition>(proxy.pathsuffix MatchesPath \"/payments\") and (request.verb = \"POST\")</Condition>\n  </Flow>\n</Flows>"],
      ["Try-it calls", "curl -i \"$APIGEE_HOST/banking/v1/metadata\"\ncurl -i \"$APIGEE_HOST/banking/v1/accounts\"\ncurl -i -X DELETE \"$APIGEE_HOST/banking/v1/accounts\""]
    ],
    practice: ["Add three resource flows.", "Call every resource with valid and invalid methods.", "Trace which flow matched.", "Write the expected backend route for each flow."],
    validate: ["Each resource has a condition.", "Invalid methods are visible in testing.", "Trace shows expected flow selection."]
  },
  5: {
    concept: "Introduce low-security protection with API products, app identity, CORS, and basic quota. This is suitable only for low-risk metadata or internal bootstrap APIs.",
    previous: "Protects the /metadata flow created on Day 4.",
    next: "Day 6 teaches debugging so learners can diagnose policy failures.",
    visual: ["Client app", "x-api-key", "VerifyAPIKey", "API product", "Quota", "Metadata target"],
    policyFlow: [
      ["VerifyAPIKey", "First identity check for low-risk APIs; establishes app/product context."],
      ["Quota", "After identity so the counter can use app or client identity."],
      ["AssignMessage", "Set CORS and safe response headers after request is allowed."]
    ],
    concepts: ["API key identifies an app, not an end user.", "API products package proxies, paths, scopes, and quota plans for consumption.", "CORS is a browser control, not primary API security.", "Low-security does not mean no monitoring."],
    bestConfig: ["Read API keys from a header, not query string.", "Use quotas per app or product, not anonymous IP, for product plans.", "Do not use API key protection for regulated, user-specific, or write APIs.", "Keep low-security endpoints free of personal or financial data."],
    snippets: [
      ["Verify API key", "<VerifyAPIKey name=\"VAK-Verify-Client\">\n  <APIKey ref=\"request.header.x-api-key\"/>\n</VerifyAPIKey>"],
      ["Low-risk quota", "<Quota name=\"Q-Low-Risk-Daily\">\n  <Identifier ref=\"verifyapikey.VAK-Verify-Client.client_id\"/>\n  <Allow count=\"1000\"/>\n  <Interval>1</Interval>\n  <TimeUnit>day</TimeUnit>\n  <Distributed>true</Distributed>\n  <Synchronous>true</Synchronous>\n</Quota>"]
    ],
    practice: ["Create or simulate an app credential.", "Call /metadata with no key, bad key, and valid key.", "Trigger the quota with a small count in a lab environment.", "Trace the variables created by VerifyAPIKey."],
    validate: ["API key is not accepted in URL.", "Quota runs after key validation.", "Response does not include sensitive backend headers."]
  },
  6: {
    concept: "Troubleshooting is a core Apigee skill. Learners practice trace, flow variables, correlation IDs, and failure isolation.",
    previous: "Uses Day 5 policy failures as realistic debugging material.",
    next: "Day 7 consolidates week 1 by rebuilding and explaining the proxy.",
    visual: ["Request ID", "Proxy flow", "Policy result", "Variables", "Target call", "Response"],
    policyFlow: [
      ["AssignMessage early", "Create a correlation ID before later policies need to log or propagate it."],
      ["RaiseFault", "Use controlled failures instead of leaking backend or policy internals."],
      ["Trace", "Observe policy order and variable state rather than guessing."]
    ],
    concepts: ["Flow variables are the runtime nervous system of Apigee.", "Trace shows which policies executed, which were skipped, and why.", "Standard error contracts make failures supportable.", "A correlation ID links client, gateway, target, and logs."],
    bestConfig: ["Use a client-provided correlation ID if present; generate one if missing.", "Never log tokens, API keys, or personal data.", "Normalize fault payloads across policies.", "Teach learners to debug from evidence, not memory."],
    snippets: [
      ["Correlation header", "<AssignMessage name=\"AM-Correlation-Id\">\n  <AssignTo createNew=\"false\" transport=\"http\" type=\"request\"/>\n  <Set>\n    <Headers>\n      <Header name=\"x-correlation-id\">{request.header.x-correlation-id}</Header>\n    </Headers>\n  </Set>\n  <IgnoreUnresolvedVariables>true</IgnoreUnresolvedVariables>\n</AssignMessage>"],
      ["Fault payload", "<RaiseFault name=\"RF-Standard-Unauthorized\">\n  <FaultResponse>\n    <Set>\n      <StatusCode>401</StatusCode>\n      <ReasonPhrase>Unauthorized</ReasonPhrase>\n      <Payload contentType=\"application/json\">{\"error\":\"unauthorized\",\"correlationId\":\"{request.header.x-correlation-id}\"}</Payload>\n    </Set>\n  </FaultResponse>\n</RaiseFault>"]
    ],
    practice: ["Break the API key reference and find the failure.", "Break the target URL and compare proxy vs target failures.", "Add correlation ID propagation.", "Write a short incident note from trace evidence."],
    validate: ["Learner can identify the failing policy.", "Correlation ID appears in request and response.", "Fault response is controlled."]
  },
  7: {
    concept: "Week 1 consolidation turns scattered labs into a repeatable foundation. Learners rebuild, explain, and clean up.",
    previous: "Reviews Days 1-6.",
    next: "Week 2 adds stronger identity, tokens, traffic controls, and reusable shared flows.",
    visual: ["REST model", "Apigee X setup", "Proxy bundle", "Low security", "Trace", "Week 2 ready"],
    policyFlow: [
      ["Low-risk gate", "VerifyAPIKey, quota, CORS, and correlation become the first reusable pattern."],
      ["Review point", "Learners explain why each policy sits where it sits."]
    ],
    concepts: ["Self-paced learning improves when learners can rebuild without copying blindly.", "Week transitions should include a working baseline and explicit known gaps.", "The low-security pattern is intentionally limited."],
    bestConfig: ["Create a clean tag or checkpoint branch.", "Keep README commands current.", "Write known limitations before adding OAuth.", "Do not carry broken lab experiments into week 2."],
    snippets: [
      ["Week 1 regression", "curl -i \"$APIGEE_HOST/banking/v1/metadata\"\ncurl -i \"$APIGEE_HOST/banking/v1/metadata\" -H \"x-api-key: bad\"\ncurl -i \"$APIGEE_HOST/banking/v1/accounts\""]
    ],
    practice: ["Rebuild the proxy from an empty folder.", "Explain the request path out loud.", "Fix naming and README gaps.", "Prepare OAuth questions for Day 8."],
    validate: ["All week 1 tests pass.", "README is usable by another learner.", "Learner can explain three-tier placement."]
  },
  8: {
    concept: "OAuth 2.0 introduces delegated authorization and bearer-token validation. Apigee can validate tokens and enforce scopes, while the authorization server owns login, consent, and token issuance strategy.",
    previous: "Builds on product and app identity from Day 5.",
    next: "Day 9 examines JWT, JWS, JWE, JOSE, and JWKS for externally issued tokens.",
    visual: ["Client", "Authorization server", "Access token", "Apigee OAuthV2", "Scope check", "Partner endpoint"],
    policyFlow: [
      ["OAuthV2 VerifyAccessToken", "Runs before quota because it establishes client, app, product, and scope context."],
      ["Scope enforcement", "Keep resource scopes close to the endpoint they protect."],
      ["Quota", "Count after identity is known."]
    ],
    concepts: ["OAuth is an authorization framework, not an authentication protocol by itself.", "Access tokens represent delegated access to protected resources.", "Scopes are coarse permissions and must be paired with resource authorization.", "Bearer tokens must be protected because possession is enough unless sender-constrained."],
    bestConfig: ["Use Authorization: Bearer, not custom token headers.", "Keep scopes resource-oriented, such as accounts:read.", "Reject missing or insufficient scopes before target routing.", "Do not let Apigee replace the authorization server for user login or consent UX."],
    snippets: [
      ["OAuthV2 verification", "<OAuthV2 name=\"OA-Verify-Access-Token\">\n  <Operation>VerifyAccessToken</Operation>\n  <AccessTokenPrefix>Bearer</AccessTokenPrefix>\n  <Scope>accounts:read</Scope>\n</OAuthV2>"],
      ["Token test matrix", "curl -i \"$APIGEE_HOST/banking/v1/partners/accounts\"\ncurl -i \"$APIGEE_HOST/banking/v1/partners/accounts\" -H \"Authorization: Bearer bad\"\ncurl -i \"$APIGEE_HOST/banking/v1/partners/accounts\" -H \"Authorization: Bearer $VALID_TOKEN\""]
    ],
    practice: ["Draw the OAuth roles: resource owner, client, authorization server, resource server.", "Protect /partners/accounts.", "Test missing, bad, wrong-scope, and valid token cases.", "Trace OAuth variables."],
    validate: ["Bearer token is required.", "Scope is enforced.", "Quota identifier uses token/app context."]
  },
  9: {
    concept: "JWT is a token format. JOSE is the family of standards around JSON signing and encryption. JWS signs content, JWE encrypts content, and JWKS publishes verification keys.",
    previous: "Deepens the token concepts introduced by OAuth on Day 8.",
    next: "Day 10 uses identity context to configure throttling and quota correctly.",
    visual: ["JOSE header", "JWT claims", "JWS signature", "JWKS key", "VerifyJWT", "Policy decision"],
    policyFlow: [
      ["VerifyJWT", "Validate signature, issuer, audience, algorithm, expiry, and required claims before trusting claims."],
      ["Claims-to-variables", "Only after signature validation should claims influence routing or authorization."],
      ["RaiseFault", "Fail closed on invalid issuer, audience, algorithm, expiry, or missing key."]
    ],
    concepts: ["JWT: JSON Web Token, usually header.payload.signature when represented as a JWS.", "JWS: JSON Web Signature, provides integrity and signer verification.", "JWE: JSON Web Encryption, protects confidentiality of claims.", "JOSE: umbrella for JWS, JWE, JWK, JWA, and related JSON security objects.", "JWKS: JSON Web Key Set endpoint used to publish public keys for verification.", "PKCE: proof key for code exchange, used at the OAuth authorization server to protect authorization code flows."],
    bestConfig: ["Pin expected issuer and audience.", "Allow only expected algorithms.", "Use JWKS over hard-coded keys for rotation.", "Never authorize using unverified JWT claims.", "Do not put secrets in JWTs unless using JWE and the ecosystem truly requires encrypted claims."],
    snippets: [
      ["Verify external JWT", "<VerifyJWT name=\"JWT-Verify-Partner-Token\">\n  <Algorithm>RS256</Algorithm>\n  <Source>request.header.authorization</Source>\n  <PublicKey>\n    <JWKS uri=\"https://idp.example.com/.well-known/jwks.json\"/>\n  </PublicKey>\n  <Issuer>https://idp.example.com</Issuer>\n  <Audience>api://banking-platform</Audience>\n</VerifyJWT>"],
      ["JWT claim inspection", "header: { \"alg\": \"RS256\", \"typ\": \"JWT\", \"kid\": \"key-1\" }\npayload: { \"iss\": \"https://idp.example.com\", \"aud\": \"api://banking-platform\", \"scope\": \"accounts:read\", \"exp\": 1893456000 }\nverification: signature checked against JWKS key with matching kid"]
    ],
    practice: ["Decode a sample JWT without trusting it.", "Explain header, claims, signature, and key ID.", "Test wrong issuer, wrong audience, expired token, and unknown kid.", "Map which claims are safe to use after verification."],
    validate: ["Issuer checked.", "Audience checked.", "Algorithm explicit.", "JWKS configured.", "Invalid tokens fail before target routing."]
  },
  10: {
    concept: "Traffic controls are not all the same. Throttling smooths bursts, quota enforces entitlement over time, and backend load balancing increases availability.",
    previous: "Uses the OAuth/JWT identity context from Days 8 and 9.",
    next: "Day 11 mediates requests and responses after identity and traffic controls are in place.",
    visual: ["Client burst", "SpikeArrest", "OAuth/JWT identity", "Quota", "Target load balancer", "Backend pool"],
    policyFlow: [
      ["SpikeArrest early", "Protects the gateway and backend from sudden bursts; can run before or after identity depending on identifier needs."],
      ["OAuth/JWT", "Establishes reliable client identity."],
      ["Quota after identity", "Counts against the correct app, client, or product."],
      ["Target LoadBalancer", "Routes to healthy backend target servers after request is accepted."]
    ],
    concepts: ["Throttling limits request rate over short intervals.", "Quota enforces contractual or product limits over longer windows.", "SpikeArrest smooths traffic but is not a billing-grade entitlement counter.", "Target servers decouple backend hosts from target endpoint XML.", "Apigee target load balancing supports algorithms such as round robin, weighted, and least connections."],
    bestConfig: ["Use SpikeArrest for burst smoothing.", "Use Quota for plan enforcement.", "Use distributed synchronous quota when accuracy matters across runtime instances.", "Use target servers for environment-specific backend routing.", "Treat 429 errors as part of the public contract."],
    snippets: [
      ["SpikeArrest", "<SpikeArrest name=\"SA-Partner-Burst\">\n  <Identifier ref=\"client_id\"/>\n  <Rate>30ps</Rate>\n  <UseEffectiveCount>true</UseEffectiveCount>\n</SpikeArrest>"],
      ["Target load balancing", "<TargetEndpoint name=\"default\">\n  <HTTPTargetConnection>\n    <LoadBalancer>\n      <Algorithm>RoundRobin</Algorithm>\n      <Server name=\"accounts-v1-a\"/>\n      <Server name=\"accounts-v1-b\"/>\n      <MaxFailures>3</MaxFailures>\n      <ServerUnhealthyResponse>\n        <ResponseCode>500</ResponseCode>\n        <ResponseCode>502</ResponseCode>\n        <ResponseCode>503</ResponseCode>\n      </ServerUnhealthyResponse>\n    </LoadBalancer>\n    <Path>/accounts</Path>\n  </HTTPTargetConnection>\n</TargetEndpoint>"]
    ],
    practice: ["Trigger SpikeArrest with a short shell loop.", "Trigger quota with a low lab count.", "Swap target server weights and explain expected routing.", "Document why 429 happened."],
    validate: ["Burst and quota are separately tested.", "Quota identifier is stable.", "Target load balancing is environment-friendly."]
  },
  11: {
    concept: "Mediation lets Apigee preserve a clean public API while backends evolve. Learners transform headers, paths, and payloads without hiding broken domain design.",
    previous: "Runs after identity and traffic decisions from Day 10.",
    next: "Day 12 packages repeated mediation and security steps into shared flows.",
    visual: ["Client contract", "ExtractVariables", "AssignMessage", "JavaScript", "Target contract", "Public response"],
    policyFlow: [
      ["ExtractVariables", "Read path, query, header, or payload values needed for routing or transformation."],
      ["AssignMessage", "Set canonical headers and remove backend-specific details."],
      ["JavaScript", "Use sparingly for validation or transformation that policies cannot express cleanly."]
    ],
    concepts: ["Mediation protects consumers from backend churn.", "AssignMessage is preferred for simple request and response shaping.", "ExtractVariables makes path and payload data available to later policies.", "JavaScript should be small, deterministic, and easy to test."],
    bestConfig: ["Prefer configuration policies over code when possible.", "Normalize headers before target call.", "Remove backend implementation headers from responses.", "Keep transformations documented in the API contract."],
    snippets: [
      ["Extract account ID", "<ExtractVariables name=\"EV-Account-Id\">\n  <URIPath>\n    <Pattern ignoreCase=\"false\">/accounts/{accountId}/balances</Pattern>\n  </URIPath>\n  <VariablePrefix>request.path</VariablePrefix>\n</ExtractVariables>"],
      ["Set target header", "<AssignMessage name=\"AM-Target-Headers\">\n  <AssignTo createNew=\"false\" transport=\"http\" type=\"request\"/>\n  <Set>\n    <Headers>\n      <Header name=\"x-account-id\">{request.path.accountId}</Header>\n      <Header name=\"x-correlation-id\">{request.header.x-correlation-id}</Header>\n    </Headers>\n  </Set>\n</AssignMessage>"]
    ],
    practice: ["Extract accountId from a path.", "Set a backend header from the extracted variable.", "Remove one backend response header.", "Trace before and after values."],
    validate: ["Public contract stable.", "Backend details hidden.", "Transformation is visible in trace."]
  },
  12: {
    concept: "Shared flows turn good decisions into platform guardrails. This is how enterprise teams avoid copy-paste security drift.",
    previous: "Packages Days 5-11 controls into reusable gates.",
    next: "Day 13 attacks those gates with abuse cases.",
    visual: ["Low gate", "Partner gate", "High-security gate", "Flow hook", "Proxy reuse", "Governance"],
    policyFlow: [
      ["SF-Low-Risk-Gate", "API key, low quota, CORS, correlation."],
      ["SF-Partner-Gate", "OAuth/JWT, threat protection, quota, burst, mediation."],
      ["SF-High-Security-Gate", "JWT/FAPI context, consent, sender-constraint evidence, audit headers, strict faults."]
    ],
    concepts: ["Shared flows centralize common policy sequences.", "Flow hooks can enforce organization-wide behavior.", "Proxy-level shared flow calls allow endpoint-specific control.", "Versioning shared controls is a governance responsibility."],
    bestConfig: ["Use shared flows for common controls, not every one-off transformation.", "Keep shared flow names purpose-based.", "Document which proxies depend on each shared flow.", "Test shared flows independently before broad rollout."],
    snippets: [
      ["Partner gate", "<SharedFlow name=\"SF-Partner-Gate\">\n  <Step><Name>JTP-Request-Shape</Name></Step>\n  <Step><Name>JWT-Verify-Partner-Token</Name></Step>\n  <Step><Name>Q-Partner-Daily-Limit</Name></Step>\n  <Step><Name>SA-Partner-Burst</Name></Step>\n  <Step><Name>AM-Target-Headers</Name></Step>\n</SharedFlow>"],
      ["Call shared flow", "<FlowCallout name=\"FC-Partner-Gate\">\n  <SharedFlowBundle>SF-Partner-Gate</SharedFlowBundle>\n</FlowCallout>"]
    ],
    practice: ["Create three shared flow skeletons.", "Call one shared flow from two endpoints.", "Change the shared flow and prove both endpoints changed.", "Write dependency notes."],
    validate: ["Shared flow has clear purpose.", "Policy order is justified.", "Regression tests cover every caller."]
  },
  13: {
    concept: "Abuse-case testing teaches why policy order matters. Learners attack payload shape, token context, quotas, and consent assumptions.",
    previous: "Tests the shared gates created on Day 12.",
    next: "Day 14 stabilizes week 2 assets before high-security week.",
    visual: ["Malformed JSON", "Missing token", "Bad scope", "Quota abuse", "Missing consent", "Controlled fault"],
    policyFlow: [
      ["Threat protection before parsing-heavy work", "Reject structurally risky payloads early."],
      ["Auth before quota when quota is identity-based", "Avoid anonymous or spoofed counters."],
      ["Authorization before mediation", "Do not transform or route requests the caller cannot make."]
    ],
    concepts: ["Negative tests are first-class API tests.", "Policy bypass often comes from ordering mistakes.", "A secure API fails closed and explains enough for support without revealing secrets.", "Abuse cases become regression tests."],
    bestConfig: ["Keep negative tests near the proxy repository.", "Use small lab limits to trigger controls quickly.", "Make every 401, 403, 413, and 429 intentional.", "Do not expose policy names or stack details in client errors."],
    snippets: [
      ["Negative test pack", "#!/usr/bin/env bash\nset -euo pipefail\nbase=\"$APIGEE_HOST/banking/v1\"\ncurl -i \"$base/partners/accounts\"\ncurl -i \"$base/partners/accounts\" -H \"Authorization: Bearer bad\"\ncurl -i \"$base/accounts\" -H \"Authorization: Bearer $VALID_TOKEN\"\ncurl -i -X POST \"$base/payments\" -H \"content-type: application/json\" --data '{\"nested\":{\"too\":{\"deep\":{\"for\":\"lab\"}}}}'"]
    ],
    practice: ["Assign one abuse scenario per learner.", "Write the failing request.", "Predict the policy that should reject it.", "Run and document the actual result."],
    validate: ["Each abuse case has a test.", "Failure status matches design.", "No sensitive values in error payload."]
  },
  14: {
    concept: "Week 2 consolidation creates the baseline for regulated and high-security work. Learners clean up identity, traffic, mediation, and shared-flow assets.",
    previous: "Consolidates Days 8-13.",
    next: "Week 3 raises the bar with open banking, sender-constrained tokens, enterprise networking, CI/CD, and the graduation proxy.",
    visual: ["OAuth", "JWT/JWKS", "Quota", "Mediation", "Shared flows", "Week 3 ready"],
    policyFlow: [
      ["Regression order", "Low, medium, and abuse-case tests must all pass before adding high-security complexity."],
      ["Documentation", "Every shared flow needs purpose, order, variables, and known limitations."]
    ],
    concepts: ["Continuity matters: high-security patterns are layered on a stable medium-security foundation.", "Documentation is part of the lab artifact.", "A broken shared flow should not become a high-security dependency."],
    bestConfig: ["Freeze a week 2 checkpoint.", "Clean policy naming.", "Write endpoint-by-endpoint requirements.", "List what the gateway does and what remains outside Apigee."],
    snippets: [
      ["Week 2 checkpoint README", "## Week 2 baseline\n- Low gate: /metadata\n- Partner gate: /partners/accounts\n- Token validation: OAuthV2 or VerifyJWT\n- Traffic controls: SpikeArrest and Quota\n- Mediation: headers and response cleanup\n- Negative tests: tests/negative.sh\n- Known gaps before week 3: consent, sender constraint, audit evidence"]
    ],
    practice: ["Run all tests from a clean terminal.", "Fix README gaps.", "Review shared flow order with another learner.", "Prepare an ADR for high-security controls."],
    validate: ["All week 2 tests pass.", "Shared flow order documented.", "Known gaps are explicit."]
  },
  15: {
    concept: "High-security and open banking-style APIs require more than a valid token. They need consent context, resource authorization, replay resistance strategy, audit evidence, and fail-closed behavior.",
    previous: "Builds on JWT/OAuth and shared flows from week 2.",
    next: "Day 16 focuses on mTLS, DPoP, and sender-constrained token choices.",
    visual: ["PKCE at AS", "PAR/JAR/JARM concepts", "JWT validation", "Consent ID", "Resource check", "Audit headers"],
    policyFlow: [
      ["JWT/OAuth validation", "Authenticate and validate token before claims are trusted."],
      ["FAPI context JavaScript", "Check required claims, scope, consent, request ID, and resource binding."],
      ["RaiseFault", "Fail closed when consent or resource context is missing."],
      ["Audit AssignMessage", "Set audit-safe headers after request is authorized."]
    ],
    concepts: ["PKCE protects OAuth authorization code flow at the authorization server.", "PAR pushes authorization request details to the authorization server to reduce front-channel tampering.", "JAR signs authorization requests; JARM signs authorization responses where required by ecosystem.", "Open banking APIs often need consent and account/resource binding in addition to scopes.", "Apigee validates and enforces at the resource gateway; it does not replace the consent platform."],
    bestConfig: ["Validate issuer, audience, expiry, algorithm, and required claims.", "Require consent ID or equivalent resource authorization context for regulated data.", "Use fail-closed defaults.", "Log decisions and correlation IDs, not secrets or full tokens."],
    snippets: [
      ["High-security context check", "var required = ['iss', 'sub', 'aud', 'exp', 'iat', 'scope', 'client_id'];\nvar missing = required.filter(function (claim) {\n  return !context.getVariable('jwt.JWT-Verify-Partner-Token.claim.' + claim);\n});\nvar scopes = String(context.getVariable('jwt.JWT-Verify-Partner-Token.claim.scope') || '');\nvar consentId = context.getVariable('request.header.x-consent-id');\nif (missing.length || scopes.split(' ').indexOf('accounts:read') === -1 || !consentId) {\n  context.setVariable('security.failure.reason', missing.join(',') || 'scope_or_consent');\n  throw new Error('High-security context validation failed');\n}"]
    ],
    practice: ["Add consent header requirement to /accounts.", "Reject missing consent.", "Reject valid token with wrong scope.", "Write an audit evidence note showing what was checked."],
    validate: ["Consent required.", "Scope required.", "Claims validated.", "Faults are controlled.", "Audit headers set after authorization."]
  },
  16: {
    concept: "Sender-constrained tokens reduce replay risk. The design choice is often mTLS or DPoP depending on ecosystem, client type, and operational constraints.",
    previous: "Strengthens the high-security flow from Day 15.",
    next: "Day 17 connects gateway controls to CDN, load balancing, and enterprise networking.",
    visual: ["Client key", "mTLS or DPoP proof", "Access token", "Apigee check", "Replay blocked", "Backend call"],
    policyFlow: [
      ["TLS/client certificate signal", "For mTLS patterns, verify certificate context at the edge/load balancer/runtime path depending on architecture."],
      ["DPoP proof validation", "For DPoP patterns, validate proof signature, htm, htu, iat, jti, and token binding where supported by architecture."],
      ["JWT/OAuth", "Token validation still happens; sender constraint augments it."]
    ],
    concepts: ["mTLS binds the client connection to a certificate.", "DPoP uses an application-layer proof JWT to bind token use to a key.", "Replay protection needs freshness, uniqueness, and binding checks.", "The exact enforcement point depends on load balancer, Apigee ingress, and authorization server design."],
    bestConfig: ["Do not claim sender-constrained enforcement unless the full path is designed and tested.", "Document where certificate or DPoP proof is validated.", "Treat replay cache or jti strategy as a required design item.", "Keep backend authorization independent of gateway trust alone."],
    snippets: [
      ["Sender-constraint ADR", "# ADR: Sender-constrained token strategy\nDecision: mTLS | DPoP\nClient type:\nWhere proof is validated:\nHow token is bound to proof:\nReplay protection strategy:\nFailure response:\nOperational risks:\nWhy this is acceptable for the endpoint:"]
    ],
    practice: ["Compare mTLS and DPoP for mobile, server-to-server, and browser clients.", "Write an ADR for /accounts.", "Add placeholder checks and fail-closed documentation.", "Explain which checks Apigee owns and which the authorization server owns."],
    validate: ["Decision documented.", "Replay risk addressed.", "Ownership clear.", "No unsupported security claim remains."]
  },
  17: {
    concept: "Enterprise Apigee X is part of a larger traffic path: DNS, CDN where appropriate, external or internal load balancing, Apigee runtime, backend load balancing, and observability.",
    previous: "Places high-security controls into a realistic enterprise network.",
    next: "Day 18 automates deployment and rollback for this enterprise view.",
    visual: ["DNS", "Cloud CDN or edge cache", "Cloud Load Balancing", "Apigee X", "Target servers", "Backends", "Logs"],
    policyFlow: [
      ["CDN before Apigee", "Use only for cacheable, non-sensitive, usually public GET responses; do not cache personalized banking data."],
      ["Cloud Load Balancing before Apigee", "Terminates and routes external traffic to Apigee access path when configured for internet access."],
      ["Apigee policy layer", "Identity, authorization, threat protection, quota, mediation, and analytics."],
      ["Target LoadBalancer after Apigee", "Distributes accepted traffic across backend target servers."]
    ],
    concepts: ["CDN improves latency and absorbs cacheable read traffic, but can be dangerous for personalized or regulated responses.", "Allowlisting, often historically called whitelisting, and denylisting, often historically called blacklisting, can happen at multiple layers: Cloud Armor, load balancer, Apigee AccessControl policy, or backend firewall.", "Enterprise Apigee X often sits between global edge/load-balancing infrastructure and domain backends.", "Backend load balancing inside Apigee uses target servers and target endpoint load balancer configuration."],
    bestConfig: ["Use CDN only when cache-control and data sensitivity are clear.", "Put volumetric DDoS and broad IP controls as far upstream as possible.", "Use Apigee AccessControl for API-specific allow/deny decisions when source IP is reliable.", "Use target servers instead of hard-coded backend URLs.", "Keep environment-specific networking out of shared proxy logic where possible."],
    snippets: [
      ["Access control allowlist", "<AccessControl name=\"AC-Allow-Trusted-Partners\">\n  <IPRules noRuleMatchAction=\"DENY\">\n    <MatchRule action=\"ALLOW\">\n      <SourceAddress mask=\"24\">203.0.113.0</SourceAddress>\n    </MatchRule>\n  </IPRules>\n</AccessControl>"],
      ["Cache-control for non-sensitive metadata", "<AssignMessage name=\"AM-Metadata-Cache-Control\">\n  <AssignTo createNew=\"false\" transport=\"http\" type=\"response\"/>\n  <Set>\n    <Headers>\n      <Header name=\"cache-control\">public, max-age=300</Header>\n    </Headers>\n  </Set>\n</AssignMessage>"]
    ],
    practice: ["Draw the enterprise traffic path for external and internal APIs.", "Mark where CDN is allowed and forbidden.", "Configure a target server load-balancing example.", "Add allowlist or denylist policy to a lab-only endpoint."],
    validate: ["CDN not used for sensitive data.", "IP controls placed intentionally.", "Load-balancing path documented.", "Apigee's enterprise position is clear."]
  },
  18: {
    concept: "CI/CD makes Apigee changes repeatable. Learners learn deploy, promote, test, rollback, and separate config from code.",
    previous: "Automates the enterprise proxy architecture from Day 17.",
    next: "Day 19 adds observability and incident drills to support the deployed system.",
    visual: ["Commit", "Validate bundle", "Deploy", "Smoke test", "Promote", "Rollback"],
    policyFlow: [
      ["Static checks", "Catch XML and naming errors before deployment."],
      ["Deploy", "Deploy proxy and shared flows to the correct environment."],
      ["Smoke tests", "Call low, medium, and high endpoints after deployment."],
      ["Rollback", "Restore last known good revision if tests fail."]
    ],
    concepts: ["Apigee configuration should move through environments through automation.", "Rollback is a planned operation, not a panic action.", "Environment config such as target servers and KVMs should be managed carefully.", "Tests are deployment gates."],
    bestConfig: ["Use service accounts for CI deploys.", "Use non-production first.", "Fail pipeline on smoke-test failure.", "Version shared flows and proxies together when they are tightly coupled."],
    snippets: [
      ["Deploy script", "#!/usr/bin/env bash\nset -euo pipefail\nmvn clean install -Ptest \\\n  -Dorg=\"$APIGEE_ORG\" \\\n  -Denv=\"$APIGEE_ENV\" \\\n  -Dtoken=\"$(gcloud auth print-access-token)\" \\\n  -Dapigee.options=update\n./tests/smoke.sh"],
      ["Rollback note", "last_good_revision=\nfailed_revision=\nrollback_command=\nsmoke_test_result=\nowner=\ndecision_time="]
    ],
    practice: ["Run a successful deploy.", "Break a policy and watch the pipeline fail.", "Restore a known-good revision.", "Document rollback evidence."],
    validate: ["Deploy command repeatable.", "Smoke tests automated.", "Rollback documented.", "Service account plan clear."]
  },
  19: {
    concept: "Observability turns a working proxy into an operable platform. Learners connect trace, analytics, logs, alerts, and support runbooks.",
    previous: "Observes the CI/CD-deployed proxy from Day 18.",
    next: "Day 20 packages developer experience and final documentation before graduation.",
    visual: ["Client error", "Correlation ID", "Apigee trace", "Analytics", "Cloud logs", "Incident timeline"],
    policyFlow: [
      ["Correlation ID first", "Every policy and backend call can refer to the same request."],
      ["MessageLogging or logging hook", "Log safe operational facts after decisions are made."],
      ["Fault rules", "Normalize errors and preserve support identifiers."]
    ],
    concepts: ["Trace is for debugging individual requests.", "Analytics is for patterns and product behavior.", "Logs are for operational timelines and incident response.", "Alerts should map to user impact and platform risk."],
    bestConfig: ["Never log tokens, API keys, or sensitive payloads.", "Log correlation ID, proxy, endpoint, client/app, status, latency, and failure reason.", "Create runbooks for 401, 403, 429, and 5xx.", "Keep incident response language simple enough for support teams."],
    snippets: [
      ["Safe log payload", "{\n  \"correlationId\": \"{request.header.x-correlation-id}\",\n  \"proxy\": \"banking-platform-v1\",\n  \"endpoint\": \"{proxy.pathsuffix}\",\n  \"clientId\": \"{client_id}\",\n  \"status\": \"{response.status.code}\",\n  \"failureReason\": \"{security.failure.reason}\"\n}"]
    ],
    practice: ["Generate 401, 403, 429, and 500-style failures.", "Trace one request end to end.", "Write an incident timeline.", "Create a troubleshooting table."],
    validate: ["Correlation visible.", "Logs are safe.", "Runbook covers common failures.", "Learner can explain the signal path."]
  },
  20: {
    concept: "Developer experience makes the API usable. Learners prepare API products, OpenAPI documentation, onboarding steps, and the final graduation proxy materials.",
    previous: "Turns the operable proxy from Day 19 into a consumable product.",
    next: "Day 21 is the final integrated graduation review.",
    visual: ["OpenAPI", "API product", "Developer app", "Credentials", "Try-it script", "Graduation package"],
    policyFlow: [
      ["API product mapping", "Product must expose the right proxy resources and security requirements."],
      ["App credentials", "Credentials connect developer onboarding to runtime policy decisions."],
      ["Docs and tests", "Every documented call has a matching copyable curl example."]
    ],
    concepts: ["Developer experience is part of API quality.", "Products define access packages.", "Docs must match gateway behavior.", "The graduation proxy must be usable by someone who did not attend the live sessions."],
    bestConfig: ["Document required headers per endpoint.", "Keep low, medium, and high security examples separate.", "Include both success and failure examples.", "Ensure OpenAPI security schemes match Apigee policies."],
    snippets: [
      ["OpenAPI security sketch", "openapi: 3.0.3\ninfo:\n  title: Banking Platform API\n  version: 1.0.0\npaths:\n  /metadata:\n    get:\n      security:\n        - ApiKeyAuth: []\n  /partners/accounts:\n    get:\n      security:\n        - BearerAuth: []\n  /accounts:\n    get:\n      security:\n        - BearerAuth: []\ncomponents:\n  securitySchemes:\n    ApiKeyAuth:\n      type: apiKey\n      in: header\n      name: x-api-key\n    BearerAuth:\n      type: http\n      scheme: bearer"]
    ],
    practice: ["Write OpenAPI for three endpoints.", "Create product/onboarding notes.", "Run all try-it scripts from docs.", "Package graduation materials."],
    validate: ["Docs and runtime match.", "Credentials work.", "Try-it scripts pass.", "Graduation package complete."]
  },
  21: {
    concept: "Graduation ties the system together. Learners present one coherent Apigee X enterprise API: RESTful design, runtime setup, proxy bundle, policy placement, security tiers, networking, CI/CD, observability, and developer onboarding.",
    previous: "Uses every artifact from Days 1-20.",
    next: "After graduation, participants use the guide as a reference and contact the instructor with implementation questions.",
    visual: ["Client/channel", "CDN/LB decision", "Apigee X", "Shared security gates", "Target load balancing", "Backends", "Observability", "Developer portal"],
    policyFlow: [
      ["Global edge", "DNS, CDN only for safe cacheable metadata, load balancing, and broad DDoS/IP controls."],
      ["Proxy PreFlow", "Correlation, threat protection, identity, and common security controls."],
      ["Endpoint shared gate", "Low, medium, or high policy sequence based on data risk and caller type."],
      ["Conditional mediation", "Resource-specific extraction, transformation, and target routing."],
      ["TargetEndpoint", "Target server load balancing, TLS, timeouts, and backend abstraction."],
      ["PostFlow/FaultRules", "Safe logging, response headers, and standardized errors."]
    ],
    concepts: ["A production API is a system, not a single proxy.", "Policy order reflects threat model and runtime cost.", "Security tiers are portfolio decisions.", "Open banking-style APIs need gateway controls plus authorization server, consent, audit, and backend authorization.", "Continuity is visible when every day leaves an artifact used by the final proxy."],
    bestConfig: ["Use the low gate only for non-sensitive metadata.", "Use partner gate for external B2B APIs with known clients and moderate sensitivity.", "Use high gate for regulated, user-specific, financial, payment, or consent-bound APIs.", "Use target servers for backend portability.", "Keep runbooks, tests, and docs in the same repository as the proxy."],
    snippets: [
      ["Graduation proxy route map", "/banking/v1/metadata\n  security: low\n  policies: VerifyAPIKey, low quota, CORS, cache-control\n\n/banking/v1/partners/accounts\n  security: medium\n  policies: VerifyJWT or OAuthV2, JSONThreatProtection, quota, SpikeArrest, mediation\n\n/banking/v1/accounts\n  security: high\n  policies: VerifyJWT, FAPI context validation, consent check, quota, SpikeArrest, audit headers, standardized faults"],
      ["End-to-end test runner", "#!/usr/bin/env bash\nset -euo pipefail\n./tests/rest-contract.sh\n./tests/low-security.sh\n./tests/medium-security.sh\n./tests/high-security.sh\n./tests/quota-and-throttle.sh\n./tests/observability.sh\n./tests/rollback-drill.sh\necho \"graduation proxy evidence complete\""]
    ],
    practice: ["Present the three-tier and enterprise architecture diagram.", "Demo low, medium, and high endpoints.", "Explain every policy placement and why it is configured that way.", "Run the full test pack.", "Answer what changes for production hardening."],
    validate: ["All endpoints pass.", "Negative tests pass.", "Policy order defended.", "Networking/CDN/load-balancing decisions explained.", "CI/CD and rollback demonstrated.", "Observability evidence shown."]
  }
};

const beginnerExplanations = {
  1: "An API is a controlled doorway into a capability. REST helps name the doorway and decide which HTTP method should be used. Apigee is the managed gateway that protects, measures, and routes calls to the real backend.",
  2: "Before building APIs, you need a place to run them. Apigee X setup creates the organization, runtime environment, hostname, and network path that later proxy bundles will use.",
  3: "A proxy bundle is the source code for an API gateway behavior. It tells Apigee what URL clients call, what backend to use, and which policies will run along the way.",
  4: "Flows are Apigee's traffic lanes. They let one proxy behave differently for GET /metadata, GET /accounts, POST /payments, and other resources.",
  5: "An API key is a simple app identity. It is useful for low-risk APIs, but it does not prove who the end user is and should not protect sensitive banking data by itself.",
  6: "Debugging in Apigee means following one request through the proxy. Trace shows which policy ran, which variable changed, and where the request failed.",
  7: "The first week is about building a stable mental model. By this point learners should be able to explain how a request enters Apigee, matches a flow, runs a policy, and reaches a backend.",
  8: "OAuth is how a client gets delegated access to a protected resource. Apigee can validate an access token and enforce scopes, while the authorization server handles login and token issuance.",
  9: "JWT is a compact token format. JWS signs it, JWE encrypts it, JOSE is the standards family, and JWKS is where public verification keys are published.",
  10: "Traffic management protects reliability. Throttling smooths sudden bursts, quota enforces allowed usage over time, and target load balancing spreads accepted traffic across backends.",
  11: "Mediation changes the shape of a request or response. Apigee can hide backend details and present a clean, stable API contract to clients.",
  12: "Shared flows are reusable policy packages. They let a platform team define a standard security gate once and apply it consistently across many proxies.",
  13: "Security is proven by trying to break the API. Negative tests check missing tokens, bad scopes, malformed payloads, quota abuse, and missing consent.",
  14: "Week 2 consolidation turns token, quota, mediation, and shared-flow work into a clean baseline. This baseline is needed before adding high-security controls.",
  15: "Open banking-style APIs need more than authentication. The gateway must check token validity, consent context, scopes, audit headers, and fail-closed behavior.",
  16: "Sender-constrained tokens reduce replay risk. mTLS and DPoP are two ways to prove that the client presenting a token is the intended holder of that token.",
  17: "In enterprises, Apigee sits in a larger traffic path. DNS, CDN, load balancing, IP controls, Apigee policies, backend load balancing, and logs all work together.",
  18: "CI/CD makes gateway changes repeatable. A pipeline validates the bundle, deploys it, tests it, and gives the team a rollback path if something fails.",
  19: "Observability is how teams support the API after it goes live. Correlation IDs, trace, logs, analytics, and runbooks help explain what happened.",
  20: "Developer experience makes the API usable by other people. Products, credentials, OpenAPI docs, and try-it scripts turn a proxy into a consumable API.",
  21: "The graduation proxy is the full system. It combines REST design, Apigee X setup, low, medium, and high security gates, enterprise networking, CI/CD, observability, and onboarding."
};

function renderPlatformIllustration(item, detail) {
  const edgeLabel = item.day >= 17 || item.day === 21 ? "DNS, CDN, load balancer" : "Hostname and route";
  const clientLabel = item.day >= 20 ? "Developer or app" : "API client";
  const backendLabel = item.day >= 10 ? "Target servers and services" : "Backend service";
  const policies = detail.policyFlow.slice(0, 4).map(([name]) => name);

  return `
    <div class="platform-illustration" role="img" aria-label="Apigee request journey for Day ${item.day}">
      <article class="platform-node client-node"><span>1</span><strong>${clientLabel}</strong><p>Sends an HTTP request.</p></article>
      <b class="journey-arrow">-></b>
      <article class="platform-node edge-node"><span>2</span><strong>${edgeLabel}</strong><p>Gets traffic to the right Apigee entry point.</p></article>
      <b class="journey-arrow">-></b>
      <article class="platform-node apigee-node"><span>3</span><strong>Apigee X proxy</strong><p>Matches base path, flow, and policy order.</p></article>
      <b class="journey-arrow">-></b>
      <article class="platform-node backend-node"><span>4</span><strong>${backendLabel}</strong><p>Receives only accepted and shaped traffic.</p></article>
      <div class="policy-stack-visual">
        <strong>Today's gateway controls</strong>
        ${policies.map((policy, index) => `<span><b>${index + 1}</b>${policy}</span>`).join("")}
      </div>
    </div>
  `;
}

function renderRequestStoryboard(detail) {
  return `
    <div class="storyboard" role="img" aria-label="Step by step concept storyboard">
      ${detail.visual.map((step, index) => `
        <article>
          <span>${index + 1}</span>
          <strong>${step}</strong>
          <p>${index === 0 ? "Start here." : index === detail.visual.length - 1 ? "This is the result to verify." : "This step changes or checks the request."}</p>
        </article>
      `).join("")}
    </div>
  `;
}

const policies = [
  ["VerifyAPIKey", "Low to medium", "Validates app identity using a key from a header, query parameter, or variable."],
  ["OAuthV2", "Medium", "Verifies or issues OAuth tokens and exposes token, app, product, developer, and scope context."],
  ["VerifyJWT", "Medium to high", "Verifies signed JWTs from an issuer and rejects invalid audience, issuer, expiry, or signature."],
  ["Quota", "Medium to high", "Enforces entitlement counts over a time window for products, clients, or custom identifiers."],
  ["SpikeArrest", "All tiers", "Smooths sudden traffic bursts to protect the gateway and backend services."],
  ["JSONThreatProtection", "All tiers", "Constrains JSON structure, string size, depth, and entry count before backend processing."],
  ["AssignMessage", "All tiers", "Sets, removes, or creates headers, payloads, query parameters, and response contracts."],
  ["RaiseFault", "All tiers", "Returns controlled errors when a request must fail closed."]
];

function renderCurriculum() {
  const target = document.querySelector("#curriculumGrid");
  if (!target) return;

  target.innerHTML = curriculum.map((item) => `
    <a class="day-card ${item.type}" href="day.html?day=${item.day}">
      <div class="day-meta"><span>Day ${item.day}</span><span>${item.type}</span></div>
      <h2>${item.title}</h2>
      <p><strong>${item.focus}</strong></p>
      <ul>${item.outcomes.map((outcome) => `<li>${outcome}</li>`).join("")}</ul>
      <p><strong>Lab:</strong> ${item.lab}</p>
      <p><strong>Practice:</strong> ${item.practice}</p>
      <p><strong>Artifact:</strong> ${item.artifact}</p>
      <span class="open-day">Open day guide</span>
    </a>
  `).join("");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderList(items) {
  return `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function renderDayGuide() {
  const target = document.querySelector("#dayGuide");
  if (!target) return;

  const params = new URLSearchParams(window.location.search);
  const dayNumber = Number(params.get("day") || "1");
  const item = curriculum.find((entry) => entry.day === dayNumber) || curriculum[0];
  const detail = dayDetails[item.day];
  const prev = curriculum.find((entry) => entry.day === item.day - 1);
  const next = curriculum.find((entry) => entry.day === item.day + 1);

  document.title = `Day ${item.day}: ${item.title} | Apigee Mastery`;

  target.innerHTML = `
    <section class="page-head day-page-head">
      <p class="eyebrow">Self-paced day guide</p>
      <h1>Day ${item.day}: ${item.title}</h1>
      <p>${item.focus}</p>
      <div class="day-nav">
        ${prev ? `<a class="button" href="day.html?day=${prev.day}">Previous: Day ${prev.day}</a>` : `<a class="button" href="curriculum.html">Back to curriculum</a>`}
        ${next ? `<a class="button primary" href="day.html?day=${next.day}">Next: Day ${next.day}</a>` : `<a class="button primary" href="assessments.html">Open assessments</a>`}
      </div>
    </section>

    <section class="fresher-panel">
      <div>
        <p class="eyebrow">For complete freshers</p>
        <h2>What this means in plain English</h2>
        <p>${beginnerExplanations[item.day]}</p>
        <p>Read the diagram from left to right. A client calls an API, traffic reaches Apigee, Apigee applies gateway controls in order, and only then does the request reach the backend service.</p>
      </div>
      ${renderPlatformIllustration(item, detail)}
    </section>

    <section class="continuity-band">
      <article><strong>Built from</strong><p>${detail.previous}</p></article>
      <article><strong>Today</strong><p>${detail.concept}</p></article>
      <article><strong>Feeds next</strong><p>${detail.next}</p></article>
    </section>

    <section class="visual-band">
      <div>
        <p class="eyebrow">Illustrated concept path</p>
        <h2>Follow the request step by step</h2>
        <p>This storyboard shows the specific idea for this day. It is deliberately simple so a new learner can connect the words to the hands-on lab.</p>
      </div>
      ${renderRequestStoryboard(detail)}
    </section>

    <section class="section-grid">
      <div>
        <p class="eyebrow">Core concepts</p>
        <h2>Learn before you configure</h2>
        ${renderList(detail.concepts)}
      </div>
      <div>
        <p class="eyebrow">Best configuration choices</p>
        <h2>How to configure it and why</h2>
        ${renderList(detail.bestConfig)}
      </div>
    </section>

    <section class="content-panel">
      <p class="eyebrow">Policy flow placement</p>
      <h2>Where each policy or platform control goes</h2>
      <div class="policy-flow">
        ${detail.policyFlow.map(([name, why], index) => `
          <article>
            <span>${index + 1}</span>
            <strong>${name}</strong>
            <p>${why}</p>
          </article>
        `).join("")}
      </div>
    </section>

    <section class="code-section">
      <p class="eyebrow">Copyable samples</p>
      <h2>Try it out</h2>
      <div class="snippet-grid">
        ${detail.snippets.map(([title, code]) => `
          <article>
            <h3>${title}</h3>
            <pre class="copyable"><code>${escapeHtml(code)}</code></pre>
          </article>
        `).join("")}
      </div>
    </section>

    <section class="section-grid">
      <div class="content-panel flush">
        <p class="eyebrow">Hands-on practice</p>
        <h2>Do the work</h2>
        ${renderList(detail.practice)}
      </div>
      <div class="content-panel flush">
        <p class="eyebrow">Validation</p>
        <h2>Know it worked</h2>
        ${renderList(detail.validate)}
      </div>
    </section>

    <section class="content-panel">
      <p class="eyebrow">Continuity checkpoint</p>
      <h2>What to carry forward</h2>
      <p><strong>Artifact:</strong> ${item.artifact}</p>
      <p><strong>Next connection:</strong> ${detail.next}</p>
      <p>When learners have questions after trying this day, they should bring the command they ran, the response or trace evidence, the expected result, and the decision they were trying to prove.</p>
    </section>
  `;
}

function renderPolicyMatrix() {
  const target = document.querySelector("#policyMatrix");
  if (!target) return;

  target.innerHTML = policies.map(([name, tier, purpose]) => `
    <article>
      <strong>${name}</strong>
      <span class="tag ${tier.includes("high") ? "high" : tier.includes("Low") ? "low" : "medium"}">${tier}</span>
      <p>${purpose}</p>
    </article>
  `).join("");
}

function attachCopyButtons() {
  document.querySelectorAll("pre.copyable").forEach((pre) => {
    const button = document.createElement("button");
    button.className = "copy-button";
    button.type = "button";
    button.textContent = "Copy";
    button.addEventListener("click", async () => {
      const text = pre.querySelector("code")?.innerText || pre.innerText;
      await navigator.clipboard.writeText(text);
      button.textContent = "Copied";
      window.setTimeout(() => { button.textContent = "Copy"; }, 1400);
    });
    pre.appendChild(button);
  });
}

renderCurriculum();
renderPolicyMatrix();
renderDayGuide();
attachCopyButtons();
