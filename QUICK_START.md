# Quick Start Guide

## 🐳 Docker Development

### Step 1: Stop any running containers
```bash
docker compose -f docker-compose.dev.yml down
```

### Step 2: Rebuild with Node.js 20
```bash
docker compose -f docker-compose.dev.yml up --build
```

### Step 3: Access the Application

**🌐 Open in your browser:**
```
http://localhost:3000
```

The application will be available at **http://localhost:3000**

---

## 📍 Port Information

- **Port:** 3000
- **URL:** http://localhost:3000
- **Access from host:** Yes (port is mapped to your machine)

---

## 🔧 Troubleshooting

If you see "port already in use" error:

1. **Check what's using port 3000:**
   ```bash
   lsof -i :3000
   ```

2. **Kill the process or change the port in docker-compose.dev.yml:**
   ```yaml
   ports:
     - "3001:3000"  # Use port 3001 instead
   ```
   Then access at: http://localhost:3001

3. **View logs:**
   ```bash
   docker compose -f docker-compose.dev.yml logs -f
   ```

---

## ✅ Success Indicators

When the container is running successfully, you should see:
```
✓ Ready in Xms
○ Local: http://localhost:3000
```

Then open: **http://localhost:3000** in your browser!

