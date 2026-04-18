# EdgeX Systems Final Year Project (FYP)
## Comprehensive Technical Documentation

**Project Type:** Full-stack web application (Frontend + Backend + Database)

**Frontend:** React 19 + Vite 6 + Tailwind CSS 4 + Motion

**Backend:** Django 6 (custom JSON API endpoint)

**Database:** PostgreSQL (via Django ORM)

**Prepared for:** University-level Final Year Project submission

---

## Declaration

I, Student Name, confirm that the research included within this thesis is my own work or that where it has been carried out in collaboration with, or supported by others, that this is duly acknowledged below, and my contribution indicated. Previously published material is also acknowledged below.

I attest that I have exercised reasonable care to ensure that the work is original and does not to the best of my knowledge infringe any third party’s copyright or other Intellectual Property Right or contain any confidential material.

I accept that the University has the right to use plagiarism detection software to check the electronic version of the thesis.

I confirm that this thesis has not been previously submitted for the award of a degree by this or any other university.

The copyright of this thesis rests with the author and no quotation from it or information derived from it may be published without the prior written consent of the author.

**Student Name:** __________________________

---

## Abstract

This document presents a complete technical analysis of the EdgeX Systems Final Year Project (FYP) repository. The system is a full-stack agency-style website that combines a modern React frontend with a Django backend and PostgreSQL data persistence. The primary interactive business workflow in the current implementation is the contact submission pipeline, where visitors submit inquiries through a richly designed frontend form, and the backend validates, stores, and acknowledges each submission.

Unlike purely static portfolio websites, this project demonstrates practical full-stack capabilities, including environment-based configuration, CORS/CSRF settings for cross-origin requests, structured relational storage, admin-side data management through Django admin, and transactional communication between browser and backend API. The codebase also emphasizes modern UI/UX design with reusable components, page transitions, in-view animations, counters, and responsive behavior for desktop and mobile devices.

The documentation is written in an academic style and strictly based on the repository’s actual code, configuration, and folder structure. It does not assume features that are absent. Where a commonly expected feature (for example, user authentication or role-based access control) is not implemented in this code version, this is explicitly stated and discussed as a potential extension.

---

## Table of Contents

1. Project Overview  
2. Features Explanation  
3. System Architecture  
4. Technologies Used  
5. Frontend Component Breakdown  
6. Backend Structure and Data Model  
7. Code Understanding and End-to-End Data Flow  
8. Folder Structure Analysis  
9. Security and Configuration Features  
10. Limitations and Improvement Opportunities  
11. Conclusion  
12. Appendix A: API Contract  
13. Appendix B: Environment Variables  
14. Appendix C: Build, Run, and Validation Workflow

---

## 1. Project Overview

### 1.1 What the application does

EdgeX Systems is a multi-page digital agency web platform. From the frontend perspective, it provides marketing and informational pages that communicate the agency’s services, portfolio, thought leadership, and contact options. The current route set includes:

- Home (`/`)
- About (`/about`)
- Services (`/services`)
- Portfolio (`/portfolio`)
- Blog (`/blog`)
- Contact (`/contact`)

The Contact page is tightly integrated with the backend, enabling users to submit inquiry details (name, email, company, requested service, and message). The backend writes these records into PostgreSQL and returns a success response; the frontend then renders a success confirmation state.

### 1.2 Purpose of the system

The system’s core purpose is twofold:

1. **Digital presence and branding:** present EdgeX as a capable digital solutions company through polished pages and visual storytelling.
2. **Lead acquisition and persistence:** transform anonymous visitors into actionable business leads via form submission and backend storage.

Thus, the project moves beyond static website delivery and demonstrates business process digitization: user interaction → structured API payload → server validation → permanent database record.

### 1.3 Problem solved

Small and mid-size agencies often rely on ad-hoc communication channels (social media DMs, unstructured email, or phone calls), which introduces lead loss and inconsistent data quality. This project solves that by providing:

- A standardized submission schema.
- Validated API intake.
- Persistent database storage.
- Administrative visibility through Django admin.

The design also addresses user trust and conversion through clear navigation, modern UX patterns, quick access to contact, and consistent call-to-action placement.

### 1.4 Target users

The project serves multiple user groups:

- **Prospective clients:** businesses looking for IT, cloud, web, app, branding, or video services.
- **Agency administrators:** personnel reviewing, searching, and filtering submissions in backend admin.
- **Internal developers/maintainers:** students or team members extending frontend pages, backend logic, and deployment configuration.

### 1.5 Scope boundaries in current version

The current repository version includes contact lead capture and admin review but does **not** implement account-based end-user authentication, blog CMS integration, or payment flows. This scope is suitable for an FYP prototype demonstrating core full-stack proficiency while leaving room for dissertation-level future expansion.

---

## 2. Features Explanation

### 2.1 Global website features

The frontend includes a coherent multi-page structure with a shared layout. Common UX behaviors include:

- Fixed animated navbar with responsive desktop/mobile modes.
- Route-based page transitions via `AnimatePresence` and `motion.div`.
- Scroll progress bar at top of the viewport.
- Scroll-to-top floating action button appearing after vertical movement.
- Reusable animated section wrapper for in-view entry transitions.
- Thematic consistency through utility classes and custom CSS variables.

### 2.2 Authentication system status
A dedicated authentication system for end users is **not present** in this version. There are no frontend login/register routes, no token/session API endpoints for users, and no auth middleware in the API route. 

However, there is administrative authentication indirectly available via **Django admin**, which requires a superuser account created through `python manage.py createsuperuser`. This allows authorized staff to access records in `/admin/`.

### 2.3 Contact form system (primary full-stack feature)

The Contact page includes a structured form with fields:

- `name` (required)
- `email` (required)
- `company` (optional)
- `service` (optional selection)
- `message` (required)

Frontend behavior:

- Validates required fields before API call.
- Reads API base URL from `VITE_API_BASE_URL` (fallback `http://localhost:8000`).
- Sends JSON payload to `POST /api/contact/`.
- Handles loading state (`Sending...`) and disables submission button to reduce duplicate submits.
- Displays server-side error text when response fails.
- Displays animated success state upon HTTP 201 response.

Backend behavior:

- Accepts POST requests only.
- Parses JSON with error handling for malformed payloads.
- Revalidates required fields server-side.
- Stores submission through Django model.
- Sends acknowledgment email to the submitter with embedded logo.
- Returns structured JSON (`ok`, `id`, `message`) for success/failure.

### 2.4 Blog system

The Blog page implements a **frontend-only publication interface** in this version:

- Hardcoded post metadata array.
- Category filtering (All, Cloud, Branding, Development, IT Security, Design, Case Study).
- Animated cards and “Load More” UI toggle.

No backend blog CRUD or CMS is currently connected. This is useful to show UI capability while leaving backend content management as future work.

### 2.5 Portfolio system

Portfolio functionality is also frontend-driven:

- Local project dataset with category metadata and visual assets.
- Filter-by-category controls.
- Animated project cards with hover overlays.
- Brand/logo strip for social proof.

This section demonstrates reusable card architecture and client-facing presentation patterns.

### 2.6 UI/UX features

The project has several polished UI/UX implementations:

- Dark-mode readiness (theme state retrieval from `localStorage`; toggle logic exists but is commented out).
- Responsive navigation and mobile menu animation.
- Consistent CTA modules reused across pages.
- Animated counters triggered on in-view detection.
- Smooth scroll interactions and micro-interactions on hover.
- Visual hierarchy via hero sections, section tags, cards, and typographic scales.

### 2.7 Admin/backend features

Backend operational features include:

- Django admin registration of contact submissions.
- Search and filter configuration in admin list view.
- PostgreSQL-backed persistence.
- Environment-driven settings for hosts, CORS, CSRF, database, and secrets.

### 2.8 APIs used

Active API integration in this repository is internal:

- `POST /api/contact/` (frontend to Django backend).

Third-party package declarations include libraries such as `@google/genai`, `express`, `react-leaflet`, etc., but only some are actively used in runtime code. This distinction is important academically: declared dependencies are not always equivalent to utilized dependencies.

---

## 3. System Architecture

### 3.1 High-level architectural style

The project follows a decoupled web architecture with clear separation:

- **Presentation layer:** React single-page application rendered in browser.
- **Application/API layer:** Django endpoint accepting and processing contact requests.
- **Data layer:** PostgreSQL database accessed through Django ORM.

### 3.2 Frontend architecture

Frontend architecture is route-oriented and componentized:

1. `main.jsx` bootstraps React root, imports global styles, and mounts `App`.
2. `App.jsx` defines route mapping under `<BrowserRouter>`.
3. `Layout.jsx` wraps all pages with shared navbar/footer and transition shell.
4. Each route component (Home, About, Services, Portfolio, Blog, Contact) defines content sections and composes reusable components.

State management is local and hook-driven (`useState`, `useEffect`, `useRef`). No global store (Redux/Zustand) is used, which is appropriate for the current complexity level.

### 3.3 Backend architecture

The backend is a compact Django project with one functional app (`contact_api`).

- `config/` contains global settings and URL routing.
- `contact_api/` contains model, API view, app URLs, admin registration, and migration.

The API is implemented through Django function-based view decorators (`@csrf_exempt`, `@require_http_methods`) rather than Django REST Framework viewsets/serializers. This is valid for a single-endpoint MVP and easier to explain in FYP reporting.

### 3.4 Database architecture

A single relational entity is defined: `ContactSubmission`.

Key fields and constraints:

- `name` (`CharField`, max 120, required)
- `email` (`EmailField`, max 254, required)
- `company` (`CharField`, optional)
- `service` (`CharField`, optional, constrained to service choices)
- `message` (`TextField`, max 5000, required)
- `created_at` (`DateTimeField`, auto-generated)

The model ordering defaults to newest-first (`-created_at`), supporting efficient admin review.

### 3.5 API communication flow

**Sequence:**

1. User submits contact form on React page.
2. Browser sends JSON request to backend URL from environment variable.
3. Django view validates payload and writes model record.
4. Django attempts to send acknowledgment email.
5. Django returns JSON result.
6. React updates UI (success or error state).

### 3.6 Deployment-oriented architecture notes

Both frontend and backend rely on environment-based runtime values. This improves portability across local, staging, and production environments. The frontend and backend can be deployed independently (for example, static frontend host + cloud Django host), provided CORS/CSRF origins are configured correctly.

---

## 4. Technologies Used

### 4.1 Frontend core stack

- **React 19**: component-based UI rendering.
- **Vite 6**: fast dev server and build pipeline.
- **React Router DOM 7**: route mapping and nested layout routing.
- **Tailwind CSS 4**: utility-first styling integrated via Vite plugin.
- **Motion (`motion/react`)**: transitions, animated entries, layout animations, and scroll-linked effects.
- **Lucide React**: icon set for visual UI semantics.

### 4.2 Backend stack

- **Django 6**: server framework, routing, model layer, admin.
- **psycopg2-binary**: PostgreSQL adapter for Django database engine.
- **python-dotenv**: `.env` loading into runtime environment.
- **asgiref/sqlparse/tzdata**: supporting Django runtime dependencies.

### 4.3 Database

- **PostgreSQL** is configured as primary database in `settings.py` with all connection fields sourced from environment variables.

### 4.4 Developer tooling and process

- **Git / GitHub** for source control and collaboration.
- **npm scripts** for frontend lifecycle (`dev`, `build`, `preview`).
- **Django management commands** for migration and admin provisioning.

### 4.5 Dependency utilization analysis

From an academic perspective, it is valuable to separate “installed” vs “actively used” dependencies:

- Actively used in code: React, React Router, Tailwind plugin, Motion, Lucide, Leaflet CSS import.
- Declared but not clearly used in current code paths: `axios`, `cors` (frontend package absent, backend uses django-cors-headers), `express`, `@google/genai`, etc.

This observation suggests the repository has either forward-looking package additions or remnants from experimentation. For production hardening, package audit and cleanup is recommended to reduce attack surface and build size.

---

## 5. Frontend Component Breakdown (Detailed)

### 5.1 Application entry and routing

#### `src/main.jsx`
- Imports base stylesheet and Leaflet stylesheet.
- Mounts `App` under React `StrictMode`.
- Initializes rendering at DOM element `#root`.

#### `src/App.jsx`
- Establishes top-level `BrowserRouter`.
- Defines nested route architecture under `Layout`.
- Maps each path to dedicated page component.

### 5.2 Shared layout components

#### `Layout`
Responsibilities:

- Wraps page content with `Navbar` and `Footer`.
- Resets scroll to top on route change (`useLocation` + `useEffect`).
- Shows top progress indicator linked to scroll progress.
- Manages floating “scroll to top” button visibility.
- Applies animated route transitions via `AnimatePresence`.

Significance: This component centralizes cross-page behavior, reducing duplication and maintaining consistency.

#### `Navbar`
Features:

- Scroll-reactive header appearance (transparent to blurred card style).
- Desktop nav links with active-route indicator animation.
- Mobile menu drawer with animated items.
- Persistent theme preference read from localStorage (`edgex-theme`).
- “Get Started” CTA linking to contact page.

Architectural value: the navigation component combines responsiveness, user state, and route awareness.

#### `Footer`
Features:

- Multi-column footer with company links, service links, and contact block.
- Social icon placeholders (currently `#` links).
- Dynamic copyright year.

### 5.3 Reusable UI modules

#### `AnimatedSection`
A wrapper component that applies in-view entrance animations and optional hover scaling to any child content. This abstraction greatly simplifies repeated animation setup across pages.

#### `AnimatedCounter`
Animated numeric increment component:

- Starts from `from` value.
- Animates to `to` when in viewport.
- Uses spring smoothing and formats numbers with `Intl.NumberFormat`.

#### `CTASection`
Reusable conversion component used on multiple pages. Includes gradient background, CTA messaging, and navigation links to Contact/Portfolio.

#### `TestimonialsSection`
Reusable social-proof section with testimonial cards and star ratings.

#### `ScrollDown`
Custom component in hero section that scrolls one viewport height downward when clicked. Includes inline animation keyframes.

### 5.4 Page components

#### Home page

Key sections:

- Hero with background video and call-to-action buttons.
- Service previews.
- About preview and stats counters.
- Portfolio preview cards.
- Testimonials and CTA.

Notable hooks and animation patterns:

- `useRef` + `useScroll` to track hero scroll context.
- Animated counters and entry animations.

#### About page

Contains:

- Intro hero.
- Story narrative.
- Timeline cards.
- Mission and vision blocks.
- Core value cards.
- Team showcase.

#### Services page

Contains:

- Service catalog cards with tags.
- 4-step process model (Discovery, Design, Build, Launch & Grow).
- Reusable CTA section.

#### Portfolio page

Contains:

- Filter controls by category.
- Motion-powered animated project grid.
- Hover overlays and metadata tags.
- Brand trust section.

#### Blog page

Contains:

- Post cards from local dataset.
- Category filters.
- Load-more interaction (UI-level toggle).
- Author identities and estimated read-time labels.

#### Contact page

Most important full-stack screen:

- Company contact cards.
- Embedded Google Maps iframe.
- Richly styled inquiry form.
- Client-side and server error feedback.
- Success-state animation on successful API submission.

### 5.5 Hooks used and their practical role

- `useState`: local UI state (menu, filters, submission status, form fields).
- `useEffect`: lifecycle effects (scroll listeners, route reset, theme restoration).
- `useRef`: DOM reference for counters and hero tracking.
- Motion hooks: `useScroll`, `useSpring`, `useTransform`, `useInView`, `useMotionValue` for advanced animations.

These hook choices are appropriate for a modern React application that prioritizes interactive user experience without external state libraries.

---

## 6. Backend Structure

### 6.1 Django project structure

The backend follows standard Django project conventions:

- `backend/manage.py`: command-line entry for migrations, server run, admin tasks.
- `backend/config/settings.py`: central configuration (apps, middleware, DB, security-related hosts/origins).
- `backend/config/urls.py`: top-level URL map.
- `backend/config/asgi.py`, `wsgi.py`: deployment interfaces.

### 6.2 Installed apps and custom app

Installed apps include core Django modules plus:

- `corsheaders`: for cross-origin frontend access.
- `contact_api`: custom app containing lead submission logic.

### 6.3 API endpoints

Current endpoint set:

- `POST /api/contact/`: accepts contact payload and persists submission.
- `GET /admin/`: Django admin UI (authentication required).

No versioned API namespace (`/api/v1/`) is currently used; this can be introduced in future scaling.

### 6.4 Model design

`ContactSubmission` model is intentionally compact and business-focused. Service choices mirror frontend dropdown options to preserve semantic alignment between UI and persisted data.

### 6.5 Serializer/view pattern

The backend does not use DRF serializers in this version. Instead, validation and parsing occur directly in function-based view logic. While this is concise, serializers would improve maintainability and explicit schema handling as endpoints grow.

### 6.6 Django admin configuration

Admin registration provides:

- list columns (`name`, `email`, `company`, `service`, `created_at`)
- searchable fields
- list filters for service and creation timestamp

This enables immediate non-technical access for reviewing leads.

### 6.7 Database configuration

Database settings are environment-driven and expect PostgreSQL variables:

- `POSTGRES_DB`
- `POSTGRES_USER`
- `POSTGRES_PASSWORD`
- `POSTGRES_HOST`
- `POSTGRES_PORT`

This pattern supports deployment flexibility and avoids hardcoding database credentials directly in source code.

---

## 7. Code Understanding: Step-by-Step System Operation

### 7.1 Frontend-to-backend connection mechanism

The `Contact` component derives the backend base URL from:

- `import.meta.env.VITE_API_BASE_URL`
- fallback: `http://localhost:8000`

It then appends `/api/contact/` and performs `fetch` with JSON body.

### 7.2 Form submission sequence (detailed)

1. User clicks submit.
2. `handleSubmit` prevents default HTML form submit.
3. Required field check occurs in browser.
4. Loading state is set to true.
5. POST request sent with JSON payload.
6. Backend parses payload, validates, saves to DB, and sends email.
7. Backend returns success or error JSON.
8. Frontend either:
   - shows animated success state and resets form, or
   - shows an inline error message.
9. Loading state is cleared.

### 7.3 Data flow model

**Input Layer:** Browser form controls  
**Transport Layer:** JSON over HTTP  
**Validation Layer:** client-side required check + server-side required check  
**Persistence Layer:** Django ORM → PostgreSQL table  
**Notification Layer:** SMTP acknowledgment email  
**Presentation Layer:** Success/failure rendered in UI

### 7.4 API consumption style

The project uses native `fetch` rather than Axios. This reduces external dependency overhead and is sufficient for current needs. Response handling includes JSON fallback for non-JSON error responses, which is a practical robustness detail.

### 7.5 Error handling strategy

Frontend:

- Missing field guard before network call.
- Try/catch around async fetch.
- User-visible error messages.

Backend:

- JSON decode exception handling.
- Required field enforcement.
- Broad exception guard with server-safe generic error response.
- Logging via `logging` module.

### 7.6 Email acknowledgment workflow

After successful model creation, the backend composes:

- plaintext body
- HTML alternative body
- inline logo image from static folder (CID reference)

and sends to the submitter’s email address. This feature adds professional behavior and immediate user confirmation, but production-grade resilience should include async task queueing and retry policies.

---

## 8. Folder Structure (Complete Explanation)

### 8.1 Repository root

- `README.md`: setup instructions for frontend/backend/database.
- `.env.example`: frontend environment template.
- `package.json`: frontend scripts and dependencies.
- `vite.config.js`: build/dev config and environment loading.
- `src/`: React source code.
- `public/`: static assets served by Vite.
- `backend/`: Django project.

### 8.2 Frontend folder details

`src/` contains:

- `main.jsx`: entry point.
- `App.jsx`: router definition.
- `index.css`: global design system + utility classes.
- `pages/`: all route pages.
- `components/`: reusable UI modules.
- `assets/`: images and videos for hero, portfolio, blogs, branding.

This structure is cleanly layered and easy for new contributors to navigate.

### 8.3 Backend folder details

`backend/` contains:

- `manage.py`: command runner.
- `requirements.txt`: Python dependency list.
- `.env.example`: backend env template.
- `config/`: global project config.
- `contact_api/`: domain app for contact pipeline.
- `static/images/logo.png`: used in acknowledgment email template.

### 8.4 Django app-level breakdown

Inside `contact_api/`:

- `models.py`: data schema.
- `views.py`: API endpoint logic.
- `urls.py`: route map for app.
- `admin.py`: admin list customization.
- `migrations/0001_initial.py`: schema creation migration.

### 8.5 Folder structure quality assessment

The project demonstrates strong baseline organization for an FYP:

- clear separation of frontend and backend concerns,
- modular React components,
- standard Django app boundaries,
- environment templates for reproducibility.

Minor improvement opportunities include creation of dedicated `docs/`, test directories (`tests/` in both frontend/backend), and CI config.

---

## 9. Security Features

### 9.1 CORS configuration

`django-cors-headers` middleware is enabled and configured through `CORS_ALLOWED_ORIGINS`, allowing defined frontend origins (e.g., localhost ports) to access backend API.

### 9.2 CSRF trusted origins

`CSRF_TRUSTED_ORIGINS` is configured from environment values. However, the contact endpoint is decorated with `@csrf_exempt`, which bypasses CSRF protection for that route. This simplifies cross-origin posting in development but should be reconsidered for production hardening.

### 9.3 Environment variable usage

Both frontend and backend include `.env.example` templates to externalize critical configuration such as:

- secret key
- debug mode
- allowed hosts
- DB credentials
- CORS/CSRF origins
- frontend API base URL

This aligns with 12-factor application practices.

### 9.4 Input validation and API protection

Current protection mechanisms:

- Required field checks on frontend and backend.
- HTTP method restriction (`POST` only).
- JSON parse error handling.

Missing but recommended controls:

- Rate limiting / throttling.
- CAPTCHA or anti-bot verification.
- Email format and message content sanitization beyond basic checks.
- Request authentication for privileged endpoints.

### 9.5 Sensitive data risk note (important)

The current `settings.py` contains SMTP credentials in source code. This is a critical security concern for real deployment and should be moved to environment variables immediately. In a university report, this can be acknowledged as a known issue corrected in the production roadmap.

### 9.6 Admin security model

Django admin uses built-in authentication and authorization. Only users with valid credentials can access `/admin/`. This provides a foundational RBAC mechanism for internal operators.

---

## 10. Limitations and Improvement Opportunities

### 10.1 Current technical limitations

- No frontend user authentication and profile system.
- Blog and portfolio content are static arrays rather than database-driven CMS resources.
- Single backend endpoint; no API versioning.
- No automated unit/integration tests in repository.
- Hardcoded SMTP credentials present in settings.
- CSRF exemption on public write endpoint.

### 10.2 Suggested future enhancements

1. **Authentication and authorization**
   - Add JWT/session auth for admin API operations.
   - Introduce role-based dashboards if required.

2. **Content management**
   - Implement blog and portfolio models with CRUD admin/forms.
   - Expose public read APIs and optional markdown rendering.

3. **API formalization**
   - Migrate to DRF serializers and viewsets.
   - Add schema generation (OpenAPI/Swagger).

4. **Security hardening**
   - Move all secrets to env variables.
   - Add rate limiting and CAPTCHA on contact endpoint.
   - Re-enable CSRF or use token-based protection.

5. **Observability and quality assurance**
   - Add backend tests for validation and persistence.
   - Add frontend tests for form state and route rendering.
   - Add CI pipeline (lint/test/build).

6. **Scalability improvements**
   - Offload email sending to background worker (Celery/RQ).
   - Add structured logging and monitoring.

7. **Deployment maturity**
   - Dockerize frontend and backend services.
   - Add Nginx reverse proxy and HTTPS enforcement.
   - Configure production-grade static/media serving.

---

## 11. Conclusion

The EdgeX FYP repository successfully demonstrates the core competencies expected in a full-stack final year project:

- Modern responsive frontend engineering with component reuse and polished UX.
- Working backend API development using Django.
- Relational persistence through PostgreSQL.
- End-to-end data flow from user input to database record.
- Basic operational/admin tooling for business workflows.

From an academic standpoint, this project is a strong practical implementation of web engineering principles. It integrates design-oriented frontend development with backend data handling in a way that is directly relevant to real-world digital agency operations.

The repository is not merely a static showcase; it includes transactional behavior, runtime configuration, and administrative workflows. With focused improvements in authentication, testing, security controls, and content dynamicity, it can evolve from a robust FYP submission into a production-ready platform.

---

## 12. Appendix A: API Contract

### Endpoint
`POST /api/contact/`

### Request Headers
- `Content-Type: application/json`

### Request Body Example

```json
{
  "name": "Alex Johnson",
  "email": "alex@company.com",
  "company": "Acme Inc.",
  "service": "Web Development",
  "message": "Tell us about your project..."
}
```

### Success Response
- HTTP 201

```json
{
  "ok": true,
  "id": 1,
  "message": "Submission successful."
}
```

### Error Cases

- Invalid JSON → HTTP 400  
- Missing required fields → HTTP 400  
- Server-side exception → HTTP 500

### Field expectations

- `name`: non-empty string
- `email`: non-empty string (email semantics expected)
- `company`: optional string
- `service`: optional string matching UI choices
- `message`: non-empty string

---

## 13. Appendix B: Environment Variables

### Frontend `.env`

- `GEMINI_API_KEY`: API key placeholder in template.
- `APP_URL`: deployment URL placeholder.
- `VITE_API_BASE_URL`: backend base URL consumed by Contact form.

### Backend `.env`

- `DJANGO_SECRET_KEY`
- `DJANGO_DEBUG`
- `DJANGO_ALLOWED_HOSTS`
- `POSTGRES_DB`
- `POSTGRES_USER`
- `POSTGRES_PASSWORD`
- `POSTGRES_HOST`
- `POSTGRES_PORT`
- `CORS_ALLOWED_ORIGINS`
- `CSRF_TRUSTED_ORIGINS`

For institutional demo environments, using `.env.example` templates improves reproducibility and onboarding.

---

## 14. Appendix C: Build, Run, and Validation Workflow

### Frontend startup

```bash
npm install
cp .env.example .env.local
npm run dev
```

### Backend startup

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
python manage.py migrate
python manage.py runserver
```

### Manual API verification

```bash
curl -X POST http://localhost:8000/api/contact/ \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Alex Johnson",
    "email": "alex@company.com",
    "company": "Acme Inc.",
    "service": "Web Development",
    "message": "Tell us about your project..."
  }'
```

### Database verification query

```bash
psql -h localhost -U edgex_user -d edgex \
  -c "SELECT id, name, email, service, created_at FROM contact_api_contactsubmission ORDER BY id DESC LIMIT 5;"
```

### Suggested academic validation checks

- Route rendering check for all six pages.
- Successful contact submission and visible success UI.
- Record visibility in Django admin list.
- Error behavior when required fields are omitted.
- Cross-origin request functionality from configured frontend origin.

---

## End of Document


---

## 15. Extended Academic Analysis

### 15.1 Human-Computer Interaction (HCI) perspective

From an HCI perspective, the frontend reflects a conversion-centered interaction model. The user journey is intentionally compressed: navigation is always visible, calls-to-action are repeated contextually, and primary action labels are concise (“Get Started”, “Book Free Consultation”, “Send Message”). This reduces cognitive friction and encourages completion of a single business objective—initiating contact.

The interface also applies progressive disclosure. Information-heavy content (services, portfolio, blog) is segmented into visual cards with scoped metadata. Users scan at category level before drilling down conceptually. Even though full detail pages are not yet implemented for portfolio/blog entries, the card model is a strong precursor for scalable content architectures.

Motion design is applied with restraint but consistency:

- Entrance transitions indicate section boundaries.
- Hover scaling signals interactivity.
- Route transitions reduce abrupt context switching.
- Scroll indicators communicate page depth and encourage exploration.

These patterns contribute to perceived quality and can measurably impact user trust in agency websites where design execution itself functions as evidence of competence.

### 15.2 Software engineering quality review

#### Modularity

The React codebase demonstrates reusable composition through dedicated components (`Layout`, `Navbar`, `Footer`, `CTASection`, `AnimatedSection`, `AnimatedCounter`, etc.). This improves maintainability and future extension.

#### Separation of concerns

- UI rendering concerns are separated from API persistence concerns.
- Backend model definitions are independent from frontend field widgets.
- Environment configuration is externalized through `.env` templates.

#### Consistency

Service options are defined in both frontend dropdown and backend model choices. This reflects intentional schema alignment, reducing semantic mismatch.

#### Maintainability concerns

- Static arrays for portfolio/blog/team data become difficult to manage at scale.
- Some unused imports/dependencies indicate technical debt potential.
- Commented-out theme toggle logic suggests unfinished feature lifecycle.

### 15.3 Reliability and fault tolerance

Current implementation includes baseline reliability controls:

- Client-side validation prevents avoidable API calls.
- Server-side validation prevents invalid database writes.
- Generic server error response avoids leaking internals.
- Error text feedback gives users actionable awareness.

However, robustness for production can be improved by:

- retry and timeout strategy in frontend API calls,
- queue-based asynchronous email sending,
- observability logs enriched with request metadata,
- database transaction handling for multi-step operations.

### 15.4 Data modeling review

The `ContactSubmission` entity is intentionally narrow and suitable for a lead-capture MVP. It captures identity, channel, intent (service), and message context. For a production CRM integration, future schema additions may include:

- status pipeline (`new`, `qualified`, `in-progress`, `closed`),
- source attribution (`organic`, `campaign`, `referral`),
- assigned owner (staff user relation),
- response SLA timestamps.

These extensions would support analytics and operational accountability.

### 15.5 API design review

The single endpoint design is easy to test and understand. It enforces POST-only semantics and returns predictable JSON structures. For an FYP context, this is appropriate and demonstrably functional.

For enterprise scaling, API evolution could include:

- standardized response envelope with request IDs,
- dedicated validation library/serializer classes,
- pagination-ready read endpoints for dashboards,
- authentication middleware for non-public operations,
- versioning path (`/api/v1/`).

### 15.6 UI scalability review

The current route system can support additional pages without structural change. A practical next step is introducing detail pages:

- `/blog/:slug`
- `/portfolio/:slug`

This would convert static summary cards into full content journeys and improve SEO and retention.

### 15.7 Accessibility considerations

Positive indicators:

- semantic buttons and links are broadly used.
- form labels exist for most inputs.
- `aria-label` appears in key actionable elements.

Potential improvements:

- keyboard-focus styles should be audited across all controls.
- color contrast for muted text on gradient backgrounds needs formal WCAG verification.
- inline iframe map should include title attribute for accessibility.

### 15.8 Performance considerations

Potential performance strengths:

- Vite build pipeline is modern and efficient.
- Componentized UI supports lazy-loading opportunities.
- Animation libraries are integrated in a targeted manner.

Potential bottlenecks:

- high-resolution local images/videos can increase initial payload.
- no explicit code splitting by route currently shown.
- duplicate CSS imports (Leaflet stylesheet imported twice in `main.jsx`) can be cleaned.

### 15.9 DevOps and environment portability

The project uses environment templates and separate frontend/backend startup instructions, enabling reproducible local development. Portability can be further improved through:

- Docker Compose for one-command orchestration,
- script-level health checks,
- CI pipeline for lint/build/test automation.

### 15.10 Ethical and data governance notes

Since contact submissions include personally identifiable information (name/email), future production deployment should include:

- explicit privacy consent statement,
- data retention policy,
- secure credential storage,
- region-specific compliance checks (e.g., GDPR-equivalent obligations where applicable).

Such considerations are increasingly expected in university FYP evaluations that include real-world deployment potential.

---

## 16. Detailed Route-by-Route Operational Explanation

### 16.1 Home route (`/`)

The Home route acts as the entry funnel and demonstrates several core technical concepts simultaneously:

- Rich media hero with video background.
- Service and portfolio summaries built from local arrays.
- Quantitative proof points via animated counters.
- Direct path to conversion through CTA buttons.

Technically, it validates candidate skills in declarative rendering, array mapping, animation orchestration, and composition with reusable sections.

### 16.2 About route (`/about`)

This route focuses on narrative credibility. Content modules include timeline milestones, mission/vision cards, and team cards. It demonstrates how static content blocks can still benefit from consistent reusable layout and animation abstractions.

From a software design viewpoint, the route is suitable for future CMS binding because data structures are already object-array based.

### 16.3 Services route (`/services`)

The Services route has two functional communication goals:

1. Explain service breadth and technical confidence.
2. Explain delivery process (Discovery → Design → Build → Launch).

This route is important academically because it models domain taxonomy and process transparency, both relevant in systems analysis and requirements engineering.

### 16.4 Portfolio route (`/portfolio`)

This route highlights category-based filtering, which is a common UI interaction pattern and can be generalized to search interfaces. The filtering logic is concise and deterministic:

- If `activeFilter` equals `All`, render full dataset.
- Else render subset where category equals selected value.

Animated transitions for filtered content improve UX continuity and perceived responsiveness.

### 16.5 Blog route (`/blog`)

The Blog route uses a similar filter strategy but applies article-specific card metadata (author initials, read time, category labels). Though static in this iteration, it demonstrates structured content modeling and establishes a direct migration path to backend-driven article endpoints.

The “Load More” control currently toggles UI state and does not fetch additional content. This is acceptable in prototype mode but should become paginated retrieval in a production CMS setup.

### 16.6 Contact route (`/contact`)

This route is the functional nucleus of the full-stack pipeline. It combines:

- Information cards (email, phone, office, working hours).
- Embedded location map.
- Validated form with controlled inputs.
- Asynchronous request flow and result rendering.

The success-state replacement of the form with a confirmation panel is a notable UX detail that closes the feedback loop clearly.

### 16.7 Shared route shell behavior

Through `Layout`, all routes benefit from:

- consistent header/footer experience,
- automatic scroll reset on navigation,
- animated page transition envelope,
- global scroll progress feedback,
- quick return-to-top control.

This improves continuity and reduces repetitive logic in page files.

---

## 17. Academic Evaluation Matrix (Suggested for Viva/Defense)

### 17.1 Functional criteria

- Multi-page routing: implemented.
- Reusable component system: implemented.
- Backend API integration: implemented.
- Persistent relational storage: implemented.
- Admin review interface: implemented.

### 17.2 Non-functional criteria

- Responsiveness: strong.
- Usability and visual consistency: strong.
- Security baseline: partial (CORS, env templates present; secrets management and CSRF strategy need improvement).
- Scalability readiness: moderate (good structure, limited API breadth).
- Test automation: currently absent.

### 17.3 Innovation criteria

The project’s innovation lies less in algorithmic novelty and more in practical integration quality: modern frontend experience tied to server-backed lead intake with structured operations. For business-oriented FYPs, this is a valid and valuable innovation profile.

### 17.4 Suggested demonstration script for examiners

1. Show route navigation and animation consistency.
2. Open Contact page and submit valid inquiry.
3. Demonstrate success message in UI.
4. Show new row in Django admin.
5. Show PostgreSQL table query with inserted record.
6. Demonstrate error case by submitting missing required fields.
7. Briefly show environment files and CORS settings.

This script clearly proves full-stack end-to-end functionality in a short viva session.

---

## 18. Final Recommendation

The EdgeX Systems FYP is a competent and presentation-ready full-stack submission with a robust frontend and a meaningful backend integration point. To elevate it from “strong project” to “industry-grade product,” the next development cycle should prioritize security hardening, automated testing, dynamic content management, and deployment automation.

Nevertheless, as currently implemented, the repository already demonstrates the most important educational outcomes of a modern web engineering FYP:

- architecture thinking,
- component-driven UI development,
- API and database integration,
- practical configuration management,
- and user-centered interaction design.


---

## 19. Exact Project Folder Structure Snapshot

For quick reference, the exact current repository tree is also provided in:

- `docs/PROJECT_FOLDER_STRUCTURE.md`

This structure snapshot is useful for viva demonstrations and for explaining code ownership boundaries between:

- frontend (`src/`),
- backend (`backend/`), and
- documentation artifacts (`docs/`).

