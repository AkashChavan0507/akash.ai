# Akash Chavan - Portfolio Website

A modern, dark-themed portfolio website showcasing my experience as a Machine Learning Engineer.

## Features

- 🎨 Modern dark theme with green accent colors
- ✨ Smooth animations and transitions
- 📱 Fully responsive design
- 🚀 Optimized for performance
- 🎯 SEO-friendly

## Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Docker Deployment

### Build and Run with Docker

1. **Build the Docker image:**
   ```bash
   docker build -t akash-portfolio .
   ```

2. **Run the container:**
   ```bash
   docker run -p 3000:3000 akash-portfolio
   ```

3. **Or use Docker Compose:**
   ```bash
   docker-compose up -d
   ```

   The application will be available at `http://localhost:3000`

### Development with Docker

For development with hot-reload:

```bash
docker build -f Dockerfile.dev -t akash-portfolio-dev .
docker run -p 3000:3000 -v $(pwd):/app akash-portfolio-dev
```

Or use docker-compose for development:
```bash
docker-compose -f docker-compose.dev.yml up
```

### Docker Commands

- **Stop the container:**
  ```bash
  docker-compose down
  ```

- **View logs:**
  ```bash
  docker-compose logs -f
  ```

- **Rebuild after changes:**
  ```bash
  docker-compose up -d --build
  ```

## Deployment on Vercel

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy" and your site will be live!

Alternatively, you can use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

### Docker on Cloud Platforms

You can also deploy the Docker container to:
- **AWS ECS/Fargate**
- **Google Cloud Run**
- **Azure Container Instances**
- **DigitalOcean App Platform**
- **Railway**
- **Render**

## Project Structure

```
├── app/              # Next.js app directory
│   ├── layout.tsx   # Root layout
│   ├── page.tsx     # Home page
│   └── globals.css  # Global styles
├── components/      # React components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   └── Contact.tsx
├── data/            # JSON data files
│   ├── experience.json
│   ├── projects.json
│   ├── skills.json
│   └── contact.json
└── public/          # Static assets
    └── ak-resumee.pdf
```

## Customization

All content is stored in JSON files in the `data/` directory. Update these files to customize:

- `data/experience.json` - Work experience
- `data/projects.json` - Projects showcase
- `data/skills.json` - Skills and technologies
- `data/contact.json` - Contact information

## License

This project is open source and available under the MIT License.

