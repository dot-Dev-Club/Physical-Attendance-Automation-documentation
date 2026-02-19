import React from 'react';

const ProjectStructure = () => (
  <section>
    <h3>Project Directory Organization</h3>
    <pre style={{ background: '#23283a', padding: '1rem', borderRadius: '6px', overflow: 'auto' }}>
{`Physical-Attendance-Automation/
├── Backend/                    # Django REST API
│   ├── attendance/             # Main app
│   │   ├── models.py          # Database models
│   │   ├── serializers.py     # DRF serializers
│   │   ├── views.py           # API endpoints
│   │   ├── permissions.py     # Custom permissions
│   │   └── urls.py            # URL routing
│   ├── config/                # Django settings
│   ├── manage.py              # Django CLI
│   ├── .env                   # Environment variables
│   ├── requirements.txt       # Python dependencies
│   └── EMAIL_SETUP_GUIDE.md  # Email configuration guide
├── Frontend/                   # React + TypeScript
│   ├── components/            # React components
│   │   ├── faculty/           # Faculty dashboard & views
│   │   ├── student/           # Student dashboard & forms
│   │   ├── login/             # Authentication pages
│   │   ├── shared/            # Shared components
│   │   └── ui/                # UI component library
│   ├── context/               # React Context providers
│   ├── services/              # API integration
│   ├── types.ts               # TypeScript definitions
│   └── .env                   # Frontend config
└── README.md`}
    </pre>
  </section>
);

export default ProjectStructure;
