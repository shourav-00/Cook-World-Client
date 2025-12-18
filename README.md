LIVE lINK:https://shourav-local-chef-bazar.netlify.app/

# 🍽️ ChefCorner - Premium Culinary Platform

> A modern food delivery platform connecting food enthusiasts with professional chefs for authentic, home-cooked meals.

![ChefCorner Banner](https://i.imgur.com/placeholder.png)

## ✨ Features

### 👥 Multi-Role Platform
- **👤 User Role**: Browse meals, place orders, track deliveries, manage favorites
- **👨‍🍳 Chef Role**: Create menus, manage orders, track earnings, update meal status
- **👑 Admin Role**: Manage users, approve chefs, monitor platform analytics

### 🚀 Key Functionalities
- 🔐 Secure authentication (Email/Password & Google OAuth)
- 🛒 Shopping cart with real-time updates
- 💳 Secure payment integration
- ⭐ Rating and review system
- 💖 Favorite meal management
- 📊 Role-based dashboards
- 📱 Fully responsive design
- 🚀 Real-time order tracking

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI Library
- **React Router DOM** - Routing
- **Tailwind CSS** - Styling Framework
- **React Icons** - Icon Library
- **React Hook Form** - Form Handling
- **React Hot Toast** - Notifications
- **TanStack Query** - Data Fetching
- **Axios** - HTTP Client

### Backend
- **Node.js** - Runtime Environment
- **Express.js** - Web Framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **Stripe** - Payment Processing
- **Firebase Auth** - Authentication
- **JWT** - Token Management

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

### Frontend Setup
```bash
# Clone the repository
git clone https://github.com/yourusername/chefcorner.git
cd chefcorner

# Install dependencies
npm install
# or
yarn install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your values

# Start development server
npm run dev
# or
yarn dev




Backend Setup

cd backend

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your values

# Start development server
npm run dev
# or
yarn dev



Environment Variables


VITE_API_BASE_URL
VITE_FIREBASE_API_KEY
VITE_FIREBASE_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID




Backend (.env)


MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
CLIENT_URL=http://localhost:5173
STRIPE_SECRET_KEY=your_stripe_secret_key




Project Structure

chefcorner/
├── src/
│   ├── assets/          # Images, icons, fonts
│   ├── components/      # Reusable components
│   │   ├── Layout/      # Layout components
│   │   ├── UI/          # UI components
│   │   └── Shared/      # Shared components
│   ├── Hooks/           # Custom React hooks
│   ├── Pages/           # Page components
│   │   ├── Dashboard/   # Dashboard pages
│   │   ├── Auth/        # Authentication pages
│   │   └── Public/      # Public pages
│   ├── Routes/          # Route configurations
│   ├── Context/         # React Context providers
│   ├── Utils/           # Utility functions
│   └── App.jsx          # Main App component
├── public/              # Static files
└── package.json         # Dependencies




Color Palette


Primary: #F59E0B (Yellow-500)
Secondary: #FBBF24 (Yellow-400)
Background: #FFFFFF, #FEF3C7 (Yellow-50)
Text: #1F2937 (Gray-800), #6B7280 (Gray-500)




Typography
Font Family: Inter, sans-serif

Headings: Bold, Gray-800

Body: Regular, Gray-600

Components
Custom buttons with hover effects

Card-based layout system

Modal dialogs

Loading skeletons

Toast notifications

📱 Pages
Public Pages
Homepage - Landing page with featured meals

Meals - Browse all available meals

Chefs - View chef profiles

Login/Register - Authentication pages

Protected Pages
User Dashboard
My Orders

Payment History

My Reviews

Favorites

Profile

Chef Dashboard
Request Orders

My Meals

Create Meals

Completed Deliveries

Profile

Admin Dashboard
All Orders

Payment History

Chef Approvals

Users Management

Profile

🔐 Authentication Flow
Registration - Email/password or Google OAuth

Login - JWT token generation

Role-based Routing - Redirect based on user role

Protected Routes - Middleware protection

Token Refresh - Automatic token renewal

🛒 Shopping Flow
Browse Meals - Filter by category, price, rating

Add to Cart - Select quantity and special instructions

Checkout - Review order, add delivery address

Payment - Secure Stripe integration

Order Tracking - Real-time status updates





Authentication


POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/google
GET    /api/auth/me




Meals



GET    /api/meals
GET    /api/meals/:id
POST   /api/meals
PUT    /api/meals/:id
DELETE /api/meals/:id





Orders

GET    /api/orders
GET    /api/orders/:id
POST   /api/orders
PUT    /api/orders/:id/status



Deployment

# Build the project
npm run build

# Deploy to Vercel
vercel --prod



Backend (Render/Railway)


# Set production environment
NODE_ENV=production
npm start




 Scripts

# Development
npm run dev          # Start development server
npm run dev:backend  # Start backend server

# Production
npm run build        # Build for production
npm start           # Start production server

# Code Quality
npm run lint        # Run ESLint
npm run format      # Format with Prettier
npm run type-check  # TypeScript type checking





For Users
Visit the website

Create an account

Browse meals

Add to cart and checkout

Track your order





For Chefs
Apply as a chef

Wait for admin approval

Create your menu

Receive and manage orders

Update order status




For Admins
Login with admin credentials

Manage user accounts

Approve chef applications

Monitor platform analytics

Handle disputes