# React Base

A modern, scalable React application template built with TanStack Router, Vite, TypeScript, and Tailwind CSS. This starter kit provides a solid foundation for building robust web applications with best practices and essential tooling pre-configured.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development](#development)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Routing](#routing)
- [Styling](#styling)
- [Testing](#testing)
- [Building for Production](#building-for-production)
- [Deployment](#deployment)
- [Environment Variables](#environment-variables)
- [API Integration](#api-integration)
- [State Management](#state-management)
- [Performance](#performance)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Features

- ⚛️ **React 19** - Latest version of React with modern features
- 🚀 **TanStack Router** - File-based routing with type safety
- ⚡ **Vite** - Fast build tool and development server
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🔤 **TypeScript** - Static type checking for better code quality
- 🧪 **Vitest** - Fast unit testing framework
- 📦 **Bun** - Fast JavaScript runtime and package manager
- 🔍 **TanStack Devtools** - Advanced debugging tools
- 🎨 **Shadcn UI** - Pre-built accessible UI components
- 🎯 **Lucide React** - Beautiful icon library
- 🏗️ **Modern project structure** - Clean and organized code organization

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Bun](https://bun.sh/) (v1.0 or higher) or Node.js (v18 or higher) and npm
- Git

## Development Environment Setup

This project uses [devenv](https://devenv.sh/) to manage the development environment. devenv provides a reproducible development environment with all necessary tools and dependencies pre-configured.

### Installing devenv

1. Install Nix package manager (if not already installed):

```bash
curl -L https://nixos.org/nix/install | sh
```

2. Enable experimental features:

```bash
echo "experimental-features = nix-command flakes" >> ~/.config/nix/nix.conf
```

3. Install devenv:

```bash
nix profile install github:cachix/devenv
```

### Setting up the Development Environment

1. Navigate to the project directory:

```bash
cd react-base
```

2. Activate the development environment:

```bash
devenv up
```

This will automatically install and configure:

- Node.js (version specified in devenv configuration)
- Bun package manager
- Git
- TypeScript
- All necessary development dependencies

### Alternative Manual Setup

If you prefer not to use devenv, you can set up the environment manually:

1. Install Node.js (v18 or higher) or Bun
2. Install Git
3. Install TypeScript globally (optional): `npm install -g typescript`

### Environment Variables

The development environment supports the following configuration:

- `.envrc` - Environment variables for direnv (if using direnv with devenv)
- `.env` - Default environment variables
- `.env.local` - Local overrides (git-ignored)

For local development, create a `.env.local` file with your specific configuration:

```env
VITE_API_URL=http://localhost:8000
VITE_DEBUG=true
```

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd react-base
```

2. Install dependencies:

```bash
bun install
```

3. Start the development server:

```bash
bun run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## Development

### Starting the Development Server

```bash
bun run dev
```

This command starts the Vite development server with hot module replacement. The application will be available at `http://localhost:3000`.

### Available Scripts

- `bun run dev` - Start the development server
- `bun run build` - Build the application for production
- `bun run serve` - Preview the production build locally
- `bun run test` - Run the test suite

### Project Structure

```
react-base/
├── public/                 # Static assets
│   ├── favicon.ico
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   ├── robots.txt
│   ├── tanstack-circle-logo.png
│   └── tanstack-word-logo-white.svg
├── src/                    # Source code
│   ├── components/         # Reusable UI components
│   │   └── Header.tsx
│   ├── lib/               # Utility functions and libraries
│   │   └── utils.ts
│   ├── routes/            # Route components (file-based routing)
│   │   ├── __root.tsx
│   │   └── index.tsx
│   ├── main.tsx           # Application entry point
│   ├── routeTree.gen.ts   # Generated route tree
│   ├── styles.css         # Global styles
│   └── logo.svg
├── .envrc                 # Environment configuration
├── .gitignore
├── bun.lock               # Bun lock file
├── components.json        # Component library configuration
├── index.html             # HTML template
├── LICENSE
├── package.json
├── README.md
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite configuration
```

## Configuration

### TypeScript Configuration

The project uses TypeScript with the following configuration in `tsconfig.json`:

- Strict mode enabled
- Module resolution set to Node
- JSX support for React
- ES2020 target for modern browser support

### Vite Configuration

Vite is configured in `vite.config.ts` with:

- React plugin for JSX transformation
- Tailwind CSS integration
- TanStack Router plugin for file-based routing
- TanStack Devtools for enhanced debugging
- Path alias `@` pointing to `src/` directory

### Tailwind CSS Configuration

Tailwind CSS is configured with:

- Modern CSS features
- Responsive design utilities
- Custom color palette
- Plugin support for animations

## Routing

This project uses TanStack Router with file-based routing. Routes are defined as files in the `src/routes/` directory:

- `__root.tsx` - Root layout component that wraps all routes
- `index.tsx` - Home page route

### Adding New Routes

To add a new route, create a new file in the `src/routes/` directory. For example, to create an "about" page:

1. Create `src/routes/about.tsx`
2. Export a component as the default export

The router will automatically detect the new route and make it available at `/about`.

### Navigation

Use the `Link` component from `@tanstack/react-router` for client-side navigation:

```tsx
import { Link } from "@tanstack/react-router";

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
```

### Layouts

Layouts are implemented using the root route in `src/routes/__root.tsx`. Any content in this file will appear on all pages. The `<Outlet />` component renders the content of the current route.

## Styling

### Tailwind CSS

The project uses Tailwind CSS for styling with the following features:

- Utility-first approach for rapid UI development
- Responsive design utilities
- Dark mode support
- Custom configuration for project-specific needs

### Global Styles

Global styles are defined in `src/styles.css` and include:

- CSS reset
- Base styles
- Typography
- Custom utility classes

### Component Styling

Components can be styled using Tailwind utility classes directly in the JSX. For more complex styling needs, you can create custom CSS classes in the global styles file.

## Testing

### Running Tests

```bash
bun run test
```

The project uses Vitest for unit testing with the following configuration:

- JSDOM environment for browser-like testing
- React testing library for component testing
- TypeScript support

### Writing Tests

Tests should be placed in files with `.test.tsx` or `.spec.tsx` extension. Example test:

```tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
    expect(screen.getByText(/welcome/i)).toBeInTheDocument();
  });
});
```

## Building for Production

### Creating a Production Build

```bash
bun run build
```

This command creates an optimized production build in the `dist/` directory. The build includes:

- Minified JavaScript and CSS
- Asset optimization
- Tree-shaking for smaller bundle sizes
- Type checking with TypeScript

### Previewing Production Build

```bash
bun run serve
```

This command serves the production build locally for testing purposes.

## Deployment

### Static Hosting

The production build creates static files that can be deployed to any static hosting service:

- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Cloudflare Pages

### Deployment Steps

1. Build the application: `bun run build`
2. Upload the contents of the `dist/` directory to your hosting service
3. Configure your hosting service to serve the `index.html` file for all routes

### Environment-Specific Configuration

For different deployment environments, use environment variables as described in the [Environment Variables](#environment-variables) section.

## Environment Variables

### Using Environment Variables

Environment variables are loaded from `.env` files and prefixed with `VITE_` for client-side access:

1. Create a `.env` file in the root directory
2. Add variables with the `VITE_` prefix:

```env
VITE_API_URL=https://api.example.com
VITE_APP_NAME=My App
```

3. Access in your code:

```tsx
const apiUrl = import.meta.env.VITE_API_URL;
```

### Environment Files

- `.env` - Default environment variables
- `.env.local` - Local overrides (git-ignored)
- `.env.production` - Production-specific variables
- `.env.development` - Development-specific variables

## API Integration

### Making API Calls

The project includes support for data fetching with TanStack Router's built-in loader functionality:

```tsx
import { createRoute } from "@tanstack/react-router";

const dataRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/data",
  loader: async () => {
    const response = await fetch(import.meta.env.VITE_API_URL + "/data");
    return response.json();
  },
  component: () => {
    const data = dataRoute.useLoaderData();
    return <div>{JSON.stringify(data)}</div>;
  },
});
```

### Using TanStack Query (Optional)

For more advanced data fetching needs, you can integrate TanStack Query:

```bash
bun install @tanstack/react-query @tanstack/react-query-devtools
```

Then configure it in your `main.tsx`:

```tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);
```

## State Management

### Built-in React State

For component-level state, use React's built-in hooks:

- `useState` for local state
- `useContext` for global state
- `useReducer` for complex state logic

### TanStack Store (Optional)

For global state management, you can use TanStack Store:

```bash
bun install @tanstack/store
```

Example usage:

```tsx
import { useStore } from "@tanstack/react-store";
import { Store } from "@tanstack/store";

const countStore = new Store(0);

function Counter() {
  const count = useStore(countStore);
  return (
    <button onClick={() => countStore.setState((n) => n + 1)}>
      Count: {count}
    </button>
  );
}
```

## Performance

### Optimizations Included

- Bundle splitting with Vite
- Tree-shaking for unused code
- Lazy loading for routes
- Optimized image loading
- Efficient rendering with React 19

### Performance Monitoring

The project includes Web Vitals reporting to monitor performance metrics:

```tsx
import reportWebVitals from "./reportWebVitals";

reportWebVitals(console.log);
```

## Contributing

### Development Setup

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/react-base.git`
3. Install dependencies: `bun install`
4. Create a branch: `git checkout -b feature-name`
5. Make your changes
6. Test your changes: `bun run test`
7. Commit your changes: `git commit -m "Add feature"`
8. Push to your fork: `git push origin feature-name`
9. Open a pull request

### Code Standards

- Follow the existing code style
- Write TypeScript types for all public APIs
- Add tests for new functionality
- Update documentation as needed
- Use descriptive commit messages

### Development Guidelines

- Keep components small and focused
- Use TypeScript for type safety
- Follow accessibility best practices
- Write meaningful test cases
- Document complex logic with comments

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [TanStack](https://tanstack.com/) - For the excellent router and other tools
- [Vite](https://vitejs.dev/) - For the fast build tool
- [Tailwind CSS](https://tailwindcss.com/) - For the utility-first CSS framework
- [React](https://react.dev/) - For the UI library
- [Bun](https://bun.sh/) - For the fast JavaScript runtime
- [TypeScript](https://www.typescriptlang.org/) - For static type checking
- [Lucide React](https://lucide.dev/) - For the beautiful icon library
- [Vitest](https://vitest.dev/) - For the fast testing framework
