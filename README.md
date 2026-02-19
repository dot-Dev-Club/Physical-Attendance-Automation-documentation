# Physical Attendance - Project Documentation

A professional, modern documentation website for the [Physical Attendance](https://github.com/dot-Dev-Club/Physical-Attendance-Automation) project, built with React, Vite, and TypeScript.

## 📋 Documentation Sections

1. **Introduction** - Project overview and prerequisites
2. **System Architecture** - High-level architecture diagram
3. **Features & User Roles** - Complete feature list for students, mentors, and HOD
4. **Technology Stack** - Frontend and backend technologies
5. **Project Structure** - Directory organization and file structure
6. **Setup & Deployment** - Installation and configuration instructions
7. **API Reference** - REST API endpoints documentation
8. **Database Schema** - Models and relationships
9. **Authentication & Permissions** - Security and access control
10. **Contributing** - Contribution guidelines and team information

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/dot-Dev-Club/Physical-Attendance-Automation-documentation.git

# Navigate to the project
cd Physical-Attendance-Automation-documentation

# Install dependencies
npm install

# Start the development server
npm run dev
```

The documentation site will be available at `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── docs/              # Documentation components
│   ├── Overview.tsx
│   ├── SystemArch.tsx
│   ├── Features.tsx
│   ├── TechStack.tsx
│   ├── ProjectStructure.tsx
│   ├── Installation.tsx
│   ├── APIReference.tsx
│   ├── DBSchema.tsx
│   ├── AuthPermissions.tsx
│   └── ContributionGuide.tsx
├── App.tsx            # Main application component
├── App.css            # Application styles
├── index.css          # Global styles
└── main.tsx           # Entry point
```

## 🎨 Design Features

- **Dark Theme** - Professional dark color scheme (#181c24 background, #4a90e2 accent)
- **Responsive Layout** - Sidebar navigation on desktop, collapsible on mobile
- **Syntax Highlighting** - Styled code blocks and inline code
- **Professional Typography** - Clean, readable font hierarchy
- **Smooth Interactions** - Transitions and hover effects

## 🛠️ Technology Stack

### Frontend
- **React 19.2.0** - JavaScript library for building UIs
- **TypeScript** - Type-safe development
- **Vite 6.4.1** - Next generation build tool
- **CSS3** - Modern styling with flexbox

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
```

This generates an optimized build in the `dist/` directory.

### Preview Build

```bash
npm run preview
```

## 🔧 Customization

To customize the documentation:

1. Edit component files in `src/docs/` to update content
2. Modify `src/App.tsx` to add/remove sections
3. Update `src/App.css` for styling changes
4. Update navigation in `sidebarSections` array in `App.tsx`

## 📄 License

This documentation site is created for the Physical Attendance project, developed for educational purposes as part of the university dot dev club.

## 🤝 Contributing

Contributions to the documentation are welcome! Please follow the contribution guidelines in the main project repository.

---

**Last Updated:** October 23, 2025

