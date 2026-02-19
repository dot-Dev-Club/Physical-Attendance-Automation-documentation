
const APIReference = () => (
  <section>
    <h3>Authentication</h3>
    <ul>
      <li><code>POST /api/auth/login/</code> - User login</li>
      <li><code>POST /api/auth/refresh/</code> - Refresh access token</li>
    </ul>

    <h3>Attendance Requests</h3>
    <ul>
      <li><code>GET /api/attendance/requests/</code> - List requests</li>
      <li><code>POST /api/attendance/requests/</code> - Create request</li>
      <li><code>GET /api/attendance/requests/{'{id}'}/ </code> - Get request details</li>
      <li><code>PATCH /api/attendance/requests/{'{id}'}/status/</code> - Update status</li>
    </ul>

    <h3>Faculty</h3>
    <ul>
      <li><code>GET /api/faculty/</code> - List faculty members</li>
    </ul>

    <h3>Statistics</h3>
    <ul>
      <li><code>GET /api/attendance/statistics/</code> - Dashboard statistics</li>
    </ul>

    <h3>Authentication Method</h3>
    <p>
      All API endpoints (except login and refresh) require JWT authentication. Include the access token in the Authorization header:
    </p>
    <pre>
{`Authorization: Bearer <access_token>`}
    </pre>
  </section>
);

export default APIReference;
