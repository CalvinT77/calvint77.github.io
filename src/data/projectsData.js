export const projectsData = [
  {
    id: "realtime-chat",
    title: "Real-Time Secure Chat Platform",
    tagline: "High-Concurrency WebSocket Chat System with JWT Authentication",
    category: "Full Stack",
    featured: true,
    description: "A production-grade, secure real-time messaging application engineered with React, Node.js, Express, and WebSockets. Delivers sub-50ms message sync, active user presence detection, and encrypted session management.",
    fullDescription: "Architected for scalable bidirectional communication. Features JWT token authentication, persistent chat history in MongoDB, active participant presence detection via Socket.io channels, and a responsive dark interface optimized for desktop and mobile devices.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    tags: ["React.js", "Node.js", "Express", "WebSockets", "Socket.io", "MongoDB", "JWT Auth", "Tailwind CSS"],
    githubUrl: "https://github.com/CalvinT77/realtimechatapp",
    demoUrl: "https://github.com/CalvinT77/realtimechatapp",
    highlights: [
      "Sub-50ms instant message sync via WebSocket event pipelines",
      "Secure JWT token-based authentication and route middleware",
      "Dynamic presence detection for live user online/offline status",
      "Mobile-first responsive interface with clean state management"
    ],
    architecture: {
      frontend: "React with modular custom hooks, Tailwind CSS layout, and Socket.io client listeners",
      backend: "Node.js & Express REST API combined with WebSocket server rooms",
      database: "MongoDB with Mongoose schemas for users, channels, and message archives"
    },
    freelanceRelevance: "Demonstrates capability to build interactive real-time apps, customer support widgets, collaborative tools, and live dashboards."
  },
  {
    id: "travlr-platform",
    title: "Travlr Getaways Full-Stack Platform",
    tagline: "End-to-End Travel Booking & Content Management Architecture",
    category: "Full Stack",
    featured: true,
    description: "An enterprise full-stack travel booking and content management platform. Features a dynamic public-facing customer portal combined with a secure administrative dashboard for itinerary and trip inventory management.",
    fullDescription: "Built with Node.js, Express, MongoDB, and modular front-end architectures. Implements secure role-based access control, RESTful API endpoints for vacation package CRUD operations, dynamic itinerary rendering, and automated database validation.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    tags: ["Node.js", "Express", "MongoDB", "Mongoose", "REST APIs", "Admin Dashboard", "Authentication"],
    githubUrl: "https://github.com/CalvinT77/travlr",
    demoUrl: "https://github.com/CalvinT77/travlr",
    highlights: [
      "Dual-interface architecture: Public client booking catalog & Secure Admin Portal",
      "Full CRUD operations on vacation packages, itineraries, and client inquiries",
      "RESTful API design with comprehensive error handling and schema validation",
      "Scalable MongoDB data layer optimized for travel itinerary structures"
    ],
    architecture: {
      frontend: "Responsive client UI and Administrative management panel",
      backend: "Node.js & Express RESTful API with route controllers and auth middleware",
      database: "MongoDB with Mongoose models for trips, reservations, and admin credentials"
    },
    freelanceRelevance: "Ideal showcase for custom booking systems, marketplace platforms, administrative portals, and inventory managers."
  },
  {
    id: "mern-nextjs",
    title: "MERN Stack Next.js Web Application",
    tagline: "High-Performance Web App with Server-Side Rendering",
    category: "Full Stack",
    featured: true,
    description: "A modern full-stack web application leveraging Next.js, React, Node.js, and MongoDB. Features server-side rendering for optimal SEO and performance, secure API route handlers, and sleek component layouts.",
    fullDescription: "Engineered following modern React and Next.js design patterns. Implements efficient data fetching strategies, serverless API endpoints, MongoDB database connectivity, and smooth component transitions.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    tags: ["Next.js", "React.js", "Node.js", "MongoDB", "Tailwind CSS", "Serverless APIs", "TypeScript/JS"],
    githubUrl: "https://github.com/CalvinT77/MERN_Fullstack-nextjs-project",
    demoUrl: "https://github.com/CalvinT77/MERN_Fullstack-nextjs-project",
    highlights: [
      "Next.js SSR/SSG rendering pipeline for instant initial page loads and top SEO score",
      "Unified full-stack repository with internal Next.js API route controllers",
      "MongoDB database integration with flexible document modeling",
      "Clean modular component design adhering to modern React conventions"
    ],
    architecture: {
      frontend: "Next.js App router, React client components, and Tailwind CSS",
      backend: "Next.js API Routes / Node.js handlers with middleware validation",
      database: "MongoDB Atlas cluster with connection pooling"
    },
    freelanceRelevance: "Ideal for clients requesting Next.js web applications, high-converting landing pages, SaaS prototypes, and modern MERN builds."
  },
  {
    id: "cinema-finder",
    title: "Cinema Finder Media Explorer",
    tagline: "Dynamic Movie & Entertainment Discovery Web Application",
    category: "Frontend",
    featured: false,
    description: "A fast, interactive frontend movie and entertainment explorer powered by external REST APIs. Features debounced live search, genre filtering, detailed cast & synopsis cards, and dynamic responsive layouts.",
    fullDescription: "Engineered with React to deliver a silky smooth user experience. Demonstrates asynchronous state management, API error handling, image caching, and accessible modal navigation for trailer previews and media details.",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80",
    tags: ["React.js", "REST APIs", "Debounced Search", "CSS3 / Modern UI", "JavaScript", "Async State"],
    githubUrl: "https://github.com/CalvinT77/cinema-finder-poc",
    demoUrl: "https://github.com/CalvinT77/cinema-finder-poc",
    highlights: [
      "Instant debounced search reducing API strain while providing live results",
      "Detailed media modal cards with ratings, release info, and plot synopses",
      "Responsive grid design adapting flawlessly from mobile to wide displays",
      "Clean modular code structure ready for production scaling"
    ],
    architecture: {
      frontend: "React SPA with custom hooks for external API consumption",
      apis: "Third-party Movie Metadata & Image CDN APIs",
      styling: "Custom modern responsive CSS grid and flex layouts"
    },
    freelanceRelevance: "Great demonstration for clients looking for API integrations, frontend dashboards, catalog browsers, and interactive UI engineering."
  }
];
