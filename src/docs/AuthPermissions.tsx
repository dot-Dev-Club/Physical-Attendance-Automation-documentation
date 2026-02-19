
const AuthPermissions = () => (
  <section>
    <h3>Authentication</h3>
    <ul>
      <li><strong>JWT-based Authentication</strong> - Access & Refresh tokens with secure token refresh mechanism</li>
      <li><strong>Email-based Login</strong> - Users authenticate using email and password</li>
      <li><strong>Role-based Permissions</strong> - Different access levels for Student, Faculty (Mentor), and Faculty (HOD)</li>
    </ul>
    <h3>Role-Based Access Control</h3>
    <ul>
      <li><strong>Student</strong> - Create and view own requests</li>
      <li><strong>Faculty (Mentor)</strong> - Approve mentor-stage requests</li>
      <li><strong>Faculty (HOD)</strong> - Final approval and email dispatch</li>
    </ul>
    <h3>Custom Permissions</h3>
    <ul>
      <li><strong>IsStudent</strong> - Student-only actions</li>
      <li><strong>IsFaculty</strong> - Faculty-only actions</li>
      <li><strong>IsHOD</strong> - HOD-only actions</li>
      <li><strong>IsStudentOwner</strong> - Own request management</li>
    </ul>
  </section>
);

export default AuthPermissions;
