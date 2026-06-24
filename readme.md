# 🚀 Full Stack Application with Docker, Prometheus, Grafana, Loki & Promtail

A production-style full-stack application demonstrating modern software development and observability practices.

This project focuses on:

- Application development
- Containerization using Docker
- Service orchestration
- Monitoring and metrics
- Centralized logging
- Production troubleshooting practices

## 🏗️ Architecture Overview

                User
                 |
                 |
          Reverse Proxy
                 |
    -------------------------
    |                       |

Frontend Backend API
React Node.js
| |
| |

---

|
Database

Observability Stack:

```
Application Logs
  |
  |
Promtail
  |
  |
Loki
  |
  |
Grafana

Application Metrics
    |
    |
Prometheus
    |
    |
Grafana Dashboard
```

---

# 🛠️ Tech Stack

## Frontend

- React
- Vite

## Backend

- Node.js
- Express

## Database

- MongoDB / PostgreSQL

## DevOps

- Docker
- Docker Compose

## Monitoring

- Prometheus
- Grafana

## Logging

- Loki
- Promtail

---

# 📋 Prerequisites

Install the following:

### Docker

Check installation:

```bash

docker --version
Docker Compose

Check:

docker compose version
Git
git --version
📥 Clone Repository
git clone <repository-url>

cd <project-folder>
📁 Project Structure
project-root
│
├── frontend
│   ├── src
│   ├── Dockerfile
│   └── package.json
│
├── backend
│   ├── src
│   ├── Dockerfile
│   └── package.json
│
├── monitoring
│
│   ├── prometheus
│   │   └── prometheus.yml
│   │
│   ├── grafana
│   │
│   ├── loki
│   │   └── loki-config.yml
│   │
│   └── promtail
│       └── promtail-config.yml
│
├── docker-compose.yml
└── README.md

⚙️ Environment Setup

Create .env files.

Example:

Backend:

PORT=5000

DATABASE_URL=<database-url>

NODE_ENV=development

Frontend:

VITE_API_URL=http://localhost:5000
🐳 Run Application Using Docker

Build containers:

docker compose build

Start services:

docker compose up

Run in background:

docker compose up -d
🔍 Check Running Containers
docker ps

Expected services:

frontend
backend
database
prometheus
grafana
loki
promtail
🌐 Application URLs
Frontend
http://localhost:5173
Backend API
http://localhost:5000
Grafana Dashboard
http://localhost:3000

Default:

username: admin
password: admin
Prometheus
http://localhost:9090
Loki
http://localhost:3100
📊 Monitoring Setup
Prometheus

Prometheus collects application metrics.

Example metrics:

API request count
Response time
CPU usage
Memory usage

Configuration:

monitoring/prometheus/prometheus.yml
Grafana

Grafana is used for visualization.

Add Prometheus datasource:

URL:

http://prometheus:9090

Add Loki datasource:

URL:

http://loki:3100
📜 Logging Flow

Application logs:

Backend Container
        |
        |
     Docker Logs
        |
        |
     Promtail
        |
        |
       Loki
        |
        |
     Grafana
🧪 Useful Docker Commands

View logs:

docker compose logs -f backend

Restart service:

docker compose restart backend

Stop application:

docker compose down

Remove containers:

docker compose down -v
🚨 Troubleshooting

Check container health:

docker ps

Check logs:

docker compose logs <service-name>

Check network:

docker network ls

Enter container:

docker exec -it <container-name> bash
🚀 Future Improvements
Kubernetes deployment
CI/CD pipeline
Infrastructure as Code using Terraform
Automated deployments
Alert rules
Cloud deployment
Load testing
👨‍💻 Author

Sarang Belsare

Full Stack Engineer | DevOps Enthusiast

⭐ If you find this project useful, feel free to explore or contribute.
```
