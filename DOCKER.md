# Docker Setup Guide

This project includes Docker configuration for both development and production environments.

## Quick Start

### Production Build

```bash
# Build the image
docker build -t akash-portfolio .

# Run the container
docker run -p 3000:3000 akash-portfolio
```

Or using Docker Compose:

```bash
docker-compose up -d
```

### Development Build

```bash
# Build the development image
docker build -f Dockerfile.dev -t akash-portfolio-dev .

# Run with volume mounting for hot-reload
docker run -p 3000:3000 -v $(pwd):/app akash-portfolio-dev
```

Or using Docker Compose:

```bash
docker-compose -f docker-compose.dev.yml up
```

## Docker Files Explained

### `Dockerfile` (Production)
- Multi-stage build for optimized image size
- Uses Node.js 18 Alpine (lightweight)
- Builds the Next.js application
- Runs in production mode
- Exposes port 3000

### `Dockerfile.dev` (Development)
- Single-stage build for faster iteration
- Includes development dependencies
- Enables hot-reload with volume mounting
- Runs Next.js development server

### `docker-compose.yml` (Production)
- Production-ready configuration
- Health checks included
- Auto-restart on failure
- Port mapping: 3000:3000

### `docker-compose.dev.yml` (Development)
- Development configuration
- Volume mounting for live code updates
- Excludes node_modules from volume

## Common Commands

```bash
# Build and start
docker-compose up -d --build

# View logs
docker-compose logs -f

# Stop containers
docker-compose down

# Remove containers and volumes
docker-compose down -v

# Rebuild without cache
docker-compose build --no-cache
```

## Deployment Options

### AWS ECS/Fargate
1. Build and push to ECR
2. Create ECS task definition
3. Deploy to Fargate

### Google Cloud Run
```bash
gcloud builds submit --tag gcr.io/PROJECT_ID/akash-portfolio
gcloud run deploy --image gcr.io/PROJECT_ID/akash-portfolio
```

### Azure Container Instances
```bash
az container create --resource-group myResourceGroup \
  --name akash-portfolio \
  --image akash-portfolio \
  --dns-name-label akash-portfolio \
  --ports 3000
```

### DigitalOcean App Platform
1. Connect GitHub repository
2. Select Dockerfile
3. Deploy

## Troubleshooting

### Port already in use
```bash
# Change port in docker-compose.yml
ports:
  - "3001:3000"  # Use port 3001 instead
```

### Build fails
```bash
# Clear Docker cache
docker system prune -a

# Rebuild without cache
docker build --no-cache -t akash-portfolio .
```

### Container exits immediately
```bash
# Check logs
docker logs akash-portfolio

# Run interactively
docker run -it akash-portfolio sh
```

## Image Size Optimization

The production Dockerfile uses:
- Multi-stage builds
- Alpine Linux (smaller base image)
- Standalone Next.js output
- Only production dependencies

Final image size: ~150-200MB

