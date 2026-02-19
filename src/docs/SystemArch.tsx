import React from 'react';

const SystemArch = () => (
  <section>
    <p>
      The Physical Attendance Automation System is built as a modern full-stack application using React on the frontend and Django REST Framework on the backend, communicating through RESTful APIs.
    </p>
    <h3>System Architecture Diagram</h3>
    <pre style={{ background: '#23283a', padding: '1rem', borderRadius: '6px', overflow: 'auto' }}>
{`Physical Attendance Automation System
├── Frontend (React + TypeScript)
│   ├── Student Portal
│   ├── Faculty Dashboard
│   ├── HOD Dashboard
│   └── Authentication Layer
├── Backend API (Django + DRF)
│   ├── Authentication & Authorization
│   ├── Form Management APIs
│   ├── User Management
│   └── Email Notification System
└── Database (PostgreSQL)
    ├── Users & Roles
    ├── Outing Forms
    └── Approval Workflow`}
    </pre>
    <p>
      The system follows a clear separation of concerns with the frontend handling UI/UX and the backend managing business logic, authentication, and database operations. All communication happens through secure REST APIs with JWT token-based authentication.
    </p>
  </section>
);

export default SystemArch;
