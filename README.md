# LibraryPulse Antivirus Service

A microservice component of the LibraryPulse platform that handles antivirus scanning and security monitoring.

## Features

- Real-time virus scanning
- File quarantine management
- Scan history and reporting
- Integration with SonicWall
- Security alerts and notifications

## Tech Stack

- Frontend:
  - React 18+
  - TypeScript
  - Vite
  - Tailwind CSS
  - React Query
  - React Hook Form

- Infrastructure:
  - Docker
  - GitHub Actions CI/CD
  - AWS Lightsail

## Development

### Prerequisites

- Node.js 18+
- Docker and Docker Compose
- Git

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/librarypulse-antivirus.git
cd librarypulse-antivirus
```

2. Install dependencies:
```bash
cd frontend
npm install
```

3. Start development server:
```bash
npm run dev
```

### Docker Development

Run the entire stack using Docker Compose:

```bash
docker-compose up -d
```

## Deployment

The service is automatically deployed to AWS Lightsail when changes are pushed to the main branch.

### CI/CD Pipeline

The pipeline includes:
- Security scanning (SAST, dependencies)
- Unit and integration tests
- Docker image building and pushing
- Automated deployment
- Health checks
- Slack notifications

## Configuration

Environment variables required for deployment:
- `VITE_API_URL`: API endpoint URL
- Additional environment variables defined in docker-compose.yml

## Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License

Proprietary - All rights reserved 