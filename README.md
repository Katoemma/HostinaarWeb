# Student Profile Manager

A modern web application built with Nuxt.js for managing student profiles and information in an educational setting. This application provides a comprehensive solution for managing student data, hostel accommodations, and administrative tasks.

## Features

- 🔐 User Authentication & Authorization
- 📊 Interactive Dashboard with Real-time Analytics
- 🏠 Hostel Room Management
- 💰 Payment Tracking
- 📱 Responsive Design
- 🌓 Dark/Light Mode Support
- 📨 Messaging System
- 🔔 Real-time Notifications

## Tech Stack

- **Frontend Framework**: Nuxt.js 3
- **UI Framework**: TailwindCSS
- **Charts**: ECharts
- **Database**: Prisma ORM
- **Icons**: Iconify

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

## Installation

1. Clone the repository:

git clone <repository-url>

2. Navigate to the project directory:
```bash
cd student-profile-manager
```

3. Install dependencies:
```bash
npm install
# or
yarn install
```

4. Create a `.env` file in the root directory and add necessary environment variables:
```env
DATABASE_URL="your-database-url"
```

5. Start the development server:
```bash
npm run dev
# or
yarn dev
```

## Project Structure

- `/app` - Main application code
  - `/components` - Reusable Vue components
  - `/layouts` - Page layouts
  - `/pages` - Application routes
- `/server` - Server-side code and API routes
- `/public` - Static assets
- `/lib` - Utility functions and shared code

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run generate` - Generate static site
- `npm run preview` - Preview production build
- `npm run postinstall` - Run post-installation tasks

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Nuxt.js team for the amazing framework
- TailwindCSS for the utility-first CSS framework
- ECharts for the powerful charting library