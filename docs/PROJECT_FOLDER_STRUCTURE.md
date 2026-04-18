# EdgeX Systems - Project Folder Structure

This file provides the exact high-level folder/file layout of the current repository (excluding generated/dependency folders such as `.git`, `node_modules`, and `__pycache__`).

```text
.
├── backend/
│   ├── config/
│   │   ├── __init__.py
│   │   ├── asgi.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   ├── contact_api/
│   │   ├── migrations/
│   │   │   ├── 0001_initial.py
│   │   │   └── __init__.py
│   │   ├── __init__.py
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── models.py
│   │   ├── urls.py
│   │   └── views.py
│   ├── static/
│   │   └── images/
│   │       └── logo.png
│   ├── .env.example
│   ├── manage.py
│   └── requirements.txt
├── docs/
│   ├── EdgeX_FYP_Project_Documentation.docx
│   ├── EdgeX_FYP_Project_Documentation.md
│   ├── generate_docx.py
│   └── PROJECT_FOLDER_STRUCTURE.md
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   ├── blogs/
│   │   ├── hero/
│   │   ├── Portfolio/
│   │   ├── hero.png
│   │   ├── logo.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── components/
│   │   ├── AnimatedCounter.jsx
│   │   ├── AnimatedSection.jsx
│   │   ├── CTASection.jsx
│   │   ├── Footer.jsx
│   │   ├── Layout.jsx
│   │   ├── Navbar.jsx
│   │   ├── scrollanimated.jsx
│   │   └── TestimonialsSection.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Blog.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── Portfolio.jsx
│   │   └── Services.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env.example
├── .gitignore
├── eslint.config.js
├── index.html
├── metadata.json
├── package-lock.json
├── package.json
├── README.md
├── vite.config.js
└── WEBSITE_DOCUMENTATION.md
```

## Quick explanation by folder

- `src/`: React frontend source (routes, reusable components, styling, assets).
- `backend/`: Django backend project and `contact_api` app.
- `docs/`: FYP report source, DOCX output, generator, and this folder structure reference.
- `public/`: static frontend public assets.

