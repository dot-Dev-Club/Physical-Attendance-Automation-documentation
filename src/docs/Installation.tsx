
const Installation = () => (
  <section>
    <h3>Backend Setup</h3>
    <ol>
      <li>Navigate to Backend directory: <code>cd Backend</code></li>
      <li>Create virtual environment:
        <pre>python -m venv .venv
.venv\Scripts\Activate.ps1  # Windows
# or
source .venv/bin/activate    # Linux/Mac</pre>
      </li>
      <li>Install dependencies: <code>pip install -r requirements.txt</code></li>
      <li>Configure environment variables:
        <ul>
          <li>Copy `.env.example` to `.env`</li>
          <li>Update database credentials</li>
          <li>Configure email settings (see `EMAIL_SETUP_GUIDE.md`)</li>
        </ul>
      </li>
      <li>Run migrations: <code>python manage.py migrate</code></li>
      <li>Create superuser (optional): <code>python manage.py createsuperuser</code></li>
      <li>Start development server: <code>python manage.py runserver</code></li>
    </ol>

    <h3>Frontend Setup</h3>
    <ol>
      <li>Navigate to Frontend directory: <code>cd Frontend</code></li>
      <li>Install dependencies: <code>npm install</code></li>
      <li>Configure environment:
        <ul>
          <li>Update `.env` with backend API URL: <code>VITE_API_URL=YOUR_VITE_API_URL</code></li>
        </ul>
      </li>
      <li>Start development server: <code>npm run dev</code></li>
    </ol>

    <h3>Production Build</h3>
    <pre>
{`# Frontend
npm run build

# Backend
python manage.py collectstatic`}
    </pre>
  </section>
);

export default Installation;
