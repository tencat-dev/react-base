# React Base

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/tencat-dev/react-base/actions)
[![Version](https://img.shields.io/github/package-json/v/tencat-dev/react-base)](https://github.com/tencat-dev/react-base)
[![License](https://img.shields.io/github/license/tencat-dev/react-base)](LICENSE)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://reactjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)

Modern React template with TanStack Router, Vite, TypeScript, and Tailwind CSS.

## 🚀 Features

- ⚛️ **React 19** - Latest React with modern features
- 🚀 **TanStack Router** - File-based routing with type safety
- ⚡ **Vite** - Fast build tool and development server
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🔤 **TypeScript** - Static type checking
- 🧪 **Vitest** - Fast unit testing
- 📦 **Bun** - Fast JavaScript runtime
- 🔍 **TanStack Devtools** - Advanced debugging
- 📝 **TanStack Form** - Type-safe form handling
- 📊 **TanStack Query** - Data fetching and state management
- 📋 **TanStack Table** - Powerful data tables
- 🌐 **Axios** - HTTP client
- 🎯 **Zod** - Schema validation
- ✨ **Lucide React** - Beautiful icons
- 🏗️ **Biome** - Code linting and formatting
- 🎭 **Motion** - Animation library
- 🎨 **Tailwind Merge** - Class name merging
- 🔄 **Tailwind Animate CSS** - Animation utilities

## 💡 Key Functionality

This template provides a comprehensive foundation for modern React applications:

- **File-based routing** with automatic type generation
- **API integration** with Axios client setup
- **Form handling** with TanStack Form and Zod validation
- **Data management** with TanStack Query
- **Styling** with Tailwind CSS and custom components
- **Testing** with Vitest and React Testing Library
- **Development tools** with TanStack Devtools
- **Code quality** with Biome and TypeScript

## 🛠️ Installation & Setup

### Prerequisites
- [Bun](https://bun.sh/) runtime (v1.0 or higher)
- Node.js (if using Node-based tools)

### Quick Start

1. Clone the repository and install dependencies:
   ```bash
   git clone https://github.com/tencat-dev/react-base.git
   cd react-base
   bun install
   ```

2. Start development server:
   ```bash
   bun run dev
   ```

3. Open `http://localhost:3000`

### Alternative Installation

If you prefer using npm or yarn instead of Bun:
```bash
# Using npm
npm install
npm run dev

# Using yarn
yarn install
yarn dev
```

## 📚 Usage Examples

### Creating a New Route

Create a new file in the `src/routes/` directory with the desired route name. The routing system automatically maps files to routes based on their filename.

### Using TanStack Query

TanStack Query provides data fetching and state management capabilities. Configure your queries using the useQuery hook with a unique query key and a query function that returns your data.

### Using TanStack Form

TanStack Form offers type-safe form handling with Zod validation. Create forms by defining a form instance with validation rules and rendering form fields with appropriate validation schemas.

## 🧪 Testing

Run the test suite using the command `bun run test`. The project includes Vitest for unit testing and React Testing Library for component testing, with JSDOM providing a browser-like environment for tests.


The project includes:
- Vitest for unit testing
- React Testing Library for component testing
- JSDOM for browser environment simulation
## 🚀 Deployment

To deploy your application, follow these steps:

1. Create a production build using `bun run build`. This command compiles and optimizes your application for production.

2. The build artifacts will be placed in the `dist/` directory. This optimized bundle is ready for deployment to any static hosting service.

3. For previewing the production build locally, use `bun run serve` to run a local server with the production build.

4. For deployment to popular platforms:
   - **Vercel**: Connect your GitHub repository and configure the build command as `bun run build` with the output directory as `dist`
   - **Netlify**: Configure the build command as `bun run build` and publish directory as `dist`
   - **GitHub Pages**: Use the `dist/` folder as the source for GitHub Pages in your repository settings
   - **AWS S3/CloudFront**: Upload the contents of the `dist/` directory to your S3 bucket
   - **Other platforms**: Deploy the contents of the `dist/` directory following the platform's static site deployment process

## 🤝 Contributing


We welcome contributions to this project! Here's how you can help:

### Getting Started

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Make your changes
4. Add tests if applicable
5. Ensure all tests pass
6. Submit a pull request

### Reporting Issues

When reporting issues, please include:
- A clear description of the problem
- Steps to reproduce
- Expected behavior
- Actual behavior
- Environment details (OS, browser, etc.)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact & Support

- Project Repository: [GitHub](https://github.com/tencat-dev/react-base)
- Issues: [GitHub Issues](https://github.com/tencat-dev/react-base/issues)
- Documentation: [README](README.md) and source code comments

For additional support, please open an issue in the GitHub repository.
