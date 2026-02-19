import React from 'react';

const DBSchema = () => (
  <section>
    <h3>Core Models</h3>
    <ul>
      <li><strong>User</strong> - Base authentication (email-based)</li>
      <li><strong>Student</strong> - Student profile with mentor assignment</li>
      <li><strong>Faculty</strong> - Faculty profile with role (Mentor/HOD)</li>
      <li><strong>AttendanceRequest</strong> - Request details with date range support, period-faculty mapping (JSONB), event coordinator, and multi-stage approval workflow</li>
    </ul>
    <h3>Database Relationships</h3>
    <pre style={{ background: '#23283a', padding: '1rem', borderRadius: '6px', overflow: 'auto' }}>
{`User (1) ←→ (1) Student/Faculty
Student (N) → (1) Faculty (mentor)
Student (1) → (N) AttendanceRequest
Faculty (1) → (N) AttendanceRequest (event coordinator)`}
    </pre>
    <p>
      The database schema is designed for flexibility and scalability, supporting multi-stage approvals, period-based faculty assignments, and comprehensive request tracking.
    </p>
  </section>
);

export default DBSchema;
