# EdgeX Website – Full Project Documentation

## 1. Project Understanding

EdgeX is a multi-page agency website with modern UI/animations. It includes:
- Home, About, Services, Portfolio, Blog, Contact pages
- Shared layout components (navbar, footer, CTA, animated sections)
- A backend API to persist contact form submissions
- PostgreSQL database as persistent storage

Primary user journey:
1. User visits marketing pages.
2. User opens Contact page.
3. User fills and submits form.
4. Frontend sends JSON payload to Django endpoint.
5. Django validates and stores record in PostgreSQL.
6. UI shows success state.

---

## 2. Tech Stack

### Frontend
- React (JavaScript/JSX)
- Vite build system
- Motion animations
- Tailwind-based styling

### Backend
- Django
- django-cors-headers (frontend/backend communication)
- psycopg (PostgreSQL driver)

### Database
- PostgreSQL

---

## 3. Repository Structure

```text
src/                       # React frontend source
backend/
  config/                  # Django project settings/urls/wsgi/asgi
  contact_api/             # Contact app (models/views/urls/admin/migrations)
  requirements.txt         # Python dependencies
README.md                  # Setup and run guide
WEBSITE_DOCUMENTATION.md   # This complete explanation
```

---

## 4. Frontend Architecture

### Routing and pages
- The app uses routed pages (`Home`, `About`, `Services`, `Portfolio`, `Blog`, `Contact`)
- Shared components provide consistent UI and animation behavior

### Contact page behavior
The Contact page:
- Keeps form state in React (`formData`)
- On submit:
  - Validates required fields (`name`, `email`, `message`)
  - Sends `POST` request to `${VITE_API_BASE_URL}/api/contact/`
  - Shows loading state while request is in progress
  - Shows error message when API fails
  - Shows success confirmation when API returns success

Environment variable used:
- `VITE_API_BASE_URL` (default fallback: `http://localhost:8000`)

---

## 5. Backend Architecture (Django)

### Django project (`backend/config`)
- `settings.py`:
  - Configures installed apps (includes `contact_api`, `corsheaders`)
  - Configures PostgreSQL database via environment variables
  - Configures CORS and CSRF trusted origins
- `urls.py`:
  - `/admin/`
  - `/api/` namespace for API routes

### Contact API app (`backend/contact_api`)

#### Model: `ContactSubmission`
Fields:
- `name` (required)
- `email` (required)
- `company` (optional)
- `service` (optional with choices matching frontend services)
- `message` (required)
- `created_at` (auto timestamp)

#### Endpoint: `POST /api/contact/`
Flow:
1. Parse JSON body
2. Validate required fields
3. Create database row
4. Return `{ ok: true, id: <row_id> }` with `201`

#### Admin integration
`ContactSubmission` is registered in Django admin for easy review, filtering, and search.

---

## 6. Database Design

Table: `contact_api_contactsubmission`

Column summary:
- `id` bigint primary key
- `name` varchar(120)
- `email` varchar(254)
- `company` varchar(160), nullable/blank
- `service` varchar(64), nullable/blank
- `message` text
- `created_at` timestamp (auto)

This schema is created by migration: `backend/contact_api/migrations/0001_initial.py`

---

## 7. End-to-End Contact Submission Flow

1. User enters form data in frontend.
2. `handleSubmit` triggers API call.
3. Request goes to Django backend.
4. Django saves the submission in PostgreSQL.
5. API responds with 201 and inserted record ID.
6. Frontend sets `isSubmitted=true` and displays success message.

---

## 8. Step-by-Step Local Run (Complete)

## Step A – Start PostgreSQL
Create DB/user and ensure credentials match `backend/.env`.

## Step B – Start Django backend
```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
python manage.py migrate
python manage.py runserver
```

## Step C – Start React frontend
```bash
cd /workspace/EdgeX
npm install
cp .env.example .env.local
npm run dev
```

## Step D – Verify
- Open `http://localhost:3000/contact`
- Submit form
- Check in DB or Django admin (`/admin`)

---

## 9. API Contract

### Request
`POST /api/contact/`

Headers:
- `Content-Type: application/json`

Body:
```json
{
  "name": "Alex Johnson",
  "email": "alex@company.com",
  "company": "Acme Inc.",
  "service": "Web Development",
  "message": "Project details..."
}
```

### Success response
- Status: `201`
```json
{ "ok": true, "id": 1 }
```

### Error response
- Status: `400`
```json
{ "ok": false, "error": "name, email and message are required." }
```

---

## 10. Code Explanation Highlights

### `src/pages/Contact.jsx`
- `isSubmitting`: avoids double submits and drives “Sending...” button text
- `submitError`: shows backend errors directly in UI
- `fetch` call sends form payload to backend API

### `backend/contact_api/models.py`
- Defines canonical structure for contact submissions
- Keeps service values aligned with frontend select options

### `backend/contact_api/views.py`
- Simple JSON API endpoint with strict POST-only behavior
- Handles invalid JSON and missing required fields
- Persists validated payload to PostgreSQL

### `backend/config/settings.py`
- Uses environment variables so deployment credentials are not hardcoded
- CORS/CSRF settings permit safe frontend-backend communication

---

## 11. Deployment Notes

For production:
- Set `DJANGO_DEBUG=false`
- Set a secure `DJANGO_SECRET_KEY`
- Restrict `DJANGO_ALLOWED_HOSTS`
- Restrict `CORS_ALLOWED_ORIGINS` and `CSRF_TRUSTED_ORIGINS`
- Run migrations on production DB before serving traffic

---

## 12. Future Improvements

- Add server-side email notifications on new submission
- Add rate limiting / anti-spam (captcha or throttling)
- Add serializer/validation layer (Django REST Framework)
- Add unit tests for API validation and persistence
- Add Docker Compose for one-command local startup (frontend + backend + postgres)
