# Antivirus Dashboard Frontend

A modern, responsive dashboard for antivirus monitoring and management built with React, Vite, and Tailwind CSS.

## Features

- Real-time threat monitoring
- Interactive charts and statistics
- Scan history visualization
- Threat management interface
- Responsive design for all devices

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Query
- React Router
- ApexCharts
- Lucide Icons

## Getting Started

### Prerequisites

- Node.js 16.x or later
- npm 7.x or later

### Installation

1. Clone the repository
2. Navigate to the frontend directory:
   ```bash
   cd antivirus/frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Development

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3004`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/     # React components
│   ├── dashboard/  # Dashboard-specific components
│   ├── layout/     # Layout components
│   ├── charts/     # Chart components
│   └── tables/     # Table components
├── config/         # Configuration files
├── services/       # API and service functions
├── hooks/          # Custom React hooks
├── types/          # TypeScript type definitions
└── utils/          # Utility functions
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request 