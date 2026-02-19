import React from 'react';

const Features = () => (
  <section>
    <h3>For Students</h3>
    <ul>
      <li><strong>Submit Attendance Requests</strong> with single day or multiple days, specific period selection (1-8), period-specific faculty assignment, event coordinator details, and event purpose/description (10-500 characters)</li>
      <li><strong>View Request History</strong> with status tracking</li>
      <li><strong>Color-coded Status Badges:</strong> Pending (Mentor), Mentor Approved, Approved, Declined</li>
      <li><strong>Real-time Updates</strong> on request status</li>
    </ul>

    <h3>For Faculty (Mentor)</h3>
    <ul>
      <li><strong>Review Student Requests</strong> in mentor queue</li>
      <li><strong>Approve/Decline</strong> with optional comments</li>
      <li><strong>Dashboard Statistics:</strong> Total requests, pending mentor approvals, approved count, declined count</li>
      <li><strong>Complete Request History</strong> with filters</li>
      <li><strong>Real-time Notification Counts</strong></li>
    </ul>

    <h3>For Faculty (HOD)</h3>
    <ul>
      <li><strong>Final Approval Authority</strong> for mentor-approved requests</li>
      <li><strong>Automated Email Notifications:</strong> Sent from HOD's email to all period faculty members including student details, periods, and event info</li>
      <li><strong>Comprehensive Dashboard</strong> with mentor approved queue, approved/declined statistics, and historical data view</li>
      <li><strong>Advanced Filtering</strong> and search capabilities</li>
    </ul>

    <h3>Email Notification System</h3>
    <ul>
      <li><strong>Automatic Email Dispatch</strong> when HOD approves</li>
      <li><strong>Personalized Emails</strong> for each faculty member</li>
      <li><strong>Detailed Information</strong> including student name and email, event date and periods, event purpose, and coordinator details</li>
      <li><strong>Secure SMTP</strong> configuration</li>
      <li><strong>Professional Email Templates</strong></li>
    </ul>
  </section>
);

export default Features;
