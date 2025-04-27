# Sensores - Sensor Management System

A modern React-based web application for managing and monitoring sensor data. This project provides a user-friendly interface for sensor data visualization and management.

## 🚀 Features

- **User Authentication**: Secure login system for user management
- **Dashboard**: Real-time sensor data visualization
- **Forms**: Interactive forms for sensor configuration and management
- **Responsive Design**: Built with Tailwind CSS and DaisyUI for a modern, responsive interface
- **Progressive Web App**: Offline capabilities and service worker support

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS, DaisyUI
- **State Management**: Formik
- **Routing**: React Router v6
- **HTTP Client**: Axios
- **Testing**: React Testing Library, Jest

## 📦 Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd sensores
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## 🏗️ Detailed Project Structure

```
sensores/
├── public/                    # Static assets and public files
│   ├── index.html            # Main HTML template
│   ├── favicon.ico           # Website favicon
│   ├── manifest.json         # PWA manifest file
│   ├── robots.txt            # Robots exclusion protocol
│   ├── logo192.png           # Small application logo
│   └── logo512.png           # Large application logo
│
├── src/                      # Source code directory
│   ├── components/           # React components
│   │   ├── Authentication/   # Authentication related components
│   │   │   └── AuthenticationContext.js  # Authentication context provider
│   │   │
│   │   ├── Dashboard/       # Dashboard components
│   │   │   └── Dashboard.js # Main dashboard component
│   │   │
│   │   ├── Forms/          # Form components
│   │   │   └── AuthenticationForms.js  # Authentication form components
│   │   │
│   │   └── NavBar/         # Navigation components
│   │       └── NavBar.js   # Main navigation component
│   │
│   ├── utils/              # Utility functions and services
│   │   └── LoginHandler/   # Login related utilities
│   │       └── LoginHandler.js  # Login handling utilities
│   │
│   ├── App.css            # Global styles
│   ├── App.js             # Main application component
│   ├── App.test.js        # Application test file
│   ├── index.js           # Application entry point
│   ├── index.css          # Global CSS styles
│   ├── logo.svg           # SVG logo file
│   ├── reportWebVitals.js # Web vitals reporting
│   ├── setupTests.js      # Test setup configuration
│   ├── serviceWorkerRegistration.js  # Service worker registration
│   └── service-worker.js  # Service worker implementation
│
├── package.json           # Project dependencies and scripts
├── package-lock.json      # Locked dependency versions
├── tailwind.config.js     # Tailwind CSS configuration
└── README.md             # Project documentation
```

## 🧪 Testing

Run the test suite:
```bash
npm test
```

## 🏭 Production Build

Create a production build:
```bash
npm run build
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.
