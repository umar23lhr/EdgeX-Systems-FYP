# EdgeX Website (React + Django + PostgreSQL)

This project contains:
- **Frontend:** React + Vite
- **Backend:** Django API
- **Database:** PostgreSQL

When the Contact form is submitted, the backend stores data in PostgreSQL.

## 1) Frontend setup

```bash
cd EdgeX-Full-stack
npm install
cp .env.example .env.local
npm run dev
```

Frontend runs at: `http://localhost:5173`

> If you changed the Vite port, update backend CORS in `backend/.env`.

## 2) PostgreSQL setup (step-by-step)

Start PostgreSQL locally, then create database + user:

```bash
sudo -u postgres psql
```

Inside `psql`, run:

```sql
CREATE DATABASE edgex;
CREATE USER edgex_user WITH PASSWORD 'edgex_password';
GRANT ALL PRIVILEGES ON DATABASE edgex TO edgex_user;
\q
```

## 3) Backend setup (Django)

```bash
cd EdgeX-Full-stack/backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

Backend runs at: `http://localhost:8000`

## 4) Verify Contact form API writes to PostgreSQL

Submit request manually:

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

Expected response:
- HTTP `201`
- JSON with `{"ok": true, "id": <number>}`

Check row in PostgreSQL:

```bash
psql -h localhost -U edgex_user -d edgex -c "SELECT id, name, email, service, created_at FROM contact_api_contactsubmission ORDER BY id DESC LIMIT 5;"
```

## 5) Admin panel

After creating superuser:
- Open `http://localhost:8000/admin/`
- Login and open **Contact Submissions**

## 6) Build frontend

```bash
cd EdgeX-Full-stack
npm run build
```
