# 🌍 TourVisto Travel App

A modern, full-stack travel agency application built with React Router 7, TypeScript, and Syncfusion UI components. Experience seamless travel planning with an intuitive admin dashboard and responsive design.

![TourVisto](./public/assets/images/readme.png)

## ✨ Features

- 🚀 **Server-side rendering** with React Router 7
- 🎨 **Modern UI** with Syncfusion components and TailwindCSS
- 📱 **Responsive design** with mobile-first approach
- 🔐 **Admin dashboard** with comprehensive management tools
- ⚡️ **Hot Module Replacement (HMR)** for fast development
- � **TypeScript** for type safety and better development experience
- 📊 **Data visualization** with interactive charts and grids
- 🗺️ **Interactive maps** for travel destinations
- 🎯 **Dynamic routing** and data loading
- 📦 **Optimized bundling** and asset management

## �️ Tech Stack

- **Frontend:** React 19, TypeScript, TailwindCSS
- **Routing:** React Router 7
- **UI Components:** Syncfusion (Navigation, Charts, Grids, Maps)
- **Styling:** TailwindCSS with custom utilities
- **Build Tool:** Vite
- **Package Manager:** npm

## 🏗️ Project Structure

```
├── app/
│   ├── routes/
│   │   └── admin/           # Admin dashboard routes
│   ├── constants/           # Application constants
│   ├── lib/                # Utility functions
│   └── root.tsx            # Root component
├── components/
│   ├── Header.tsx          # Reusable header component
│   ├── NavItems.tsx        # Navigation items
│   ├── mobileSidebar.tsx   # Mobile navigation
│   └── index.ts            # Component exports
├── public/
│   ├── assets/
│   │   ├── icons/          # SVG icons
│   │   └── images/         # Application images
└── Dockerfile              # Docker configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Syncfusion license key (for UI components)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/kmgmedia/travel-agency-fullstack.git
   cd tourvisto-travel-app-ai
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory:

   ```env
   VITE_SYNCFUSION_LICENSE_KEY=your_syncfusion_license_key_here
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run typecheck` - Run TypeScript type checking

## 🔧 Configuration

### Syncfusion License

This application uses Syncfusion UI components which require a valid license key. You can:

1. Get a free community license from [Syncfusion](https://www.syncfusion.com/products/communitylicense)
2. Add your license key to the `.env.local` file
3. The license is automatically registered in the application

### Environment Variables

| Variable                      | Description                              | Required |
| ----------------------------- | ---------------------------------------- | -------- |
| `VITE_SYNCFUSION_LICENSE_KEY` | Syncfusion license key for UI components | Yes      |

## 🐳 Docker Deployment

### Build and run with Docker:

```bash
# Build the Docker image
docker build -t tourvisto-app .

# Run the container
docker run -p 3000:3000 tourvisto-app
```

### Deploy to cloud platforms:

- **AWS ECS/Fargate**
- **Google Cloud Run**
- **Azure Container Apps**
- **Digital Ocean App Platform**
- **Railway**
- **Fly.io**

## 🎨 UI Components

The application leverages Syncfusion's comprehensive UI component suite:

- **Navigation:** Sidebar, Menu, Toolbar
- **Data Visualization:** Charts, Grids, Maps
- **Input Controls:** Buttons, Dropdowns, Form controls
- **Layout:** Responsive grid system

## 📱 Responsive Design

- Mobile-first approach with TailwindCSS
- Adaptive sidebar navigation
- Touch-friendly interface
- Cross-browser compatibility

## 🔒 Admin Features

- **Dashboard:** Overview with analytics and metrics
- **User Management:** Comprehensive user administration
- **Data Grids:** Interactive tables with sorting and filtering
- **Charts:** Visual data representation
- **Mobile Navigation:** Collapsible sidebar for mobile devices

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/kmgmedia/travel-agency-fullstack/issues) page
2. Create a new issue with detailed information
3. Contact the development team

## 🙏 Acknowledgments

- [React Router](https://reactrouter.com/) for the amazing routing framework
- [Syncfusion](https://www.syncfusion.com/) for the comprehensive UI components
- [TailwindCSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Vite](https://vitejs.dev/) for the lightning-fast build tool

---

**Built with ❤️ by KMG Media**

_Experience the future of travel planning with TourVisto_
