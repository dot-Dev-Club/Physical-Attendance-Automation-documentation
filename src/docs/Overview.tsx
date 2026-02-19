import React from 'react';

const Overview = () => (
  <section>
    <p>
      <strong>Physical Attendance Automation</strong> is a modern full-stack web application for managing student physical attendance requests in educational institutions with a two-tier faculty approval workflow and automated email notifications.
    </p>

    <h3>System Overview</h3>
    <p>
      This system streamlines the process of managing student attendance for physical events/activities during class hours. Students can submit requests that go through a comprehensive two-stage approval process:
    </p>
    <ol>
      <li><strong>Mentor Approval</strong> - First level review by assigned faculty mentor</li>
      <li><strong>HOD Approval</strong> - Final approval by Head of Department</li>
    </ol>
    <p>
      Upon HOD approval, automated email notifications are sent to all relevant faculty members for seamless attendance tracking.
    </p>

    <h3>Prerequisites</h3>
    <ul>
      <li><strong>Node.js</strong> (v18+)</li>
      <li><strong>Python</strong> (v3.10+)</li>
      <li><strong>PostgreSQL</strong> (v14+)</li>
      <li><strong>npm</strong> or <strong>yarn</strong></li>
    </ul>
  </section>
);

export default Overview;
