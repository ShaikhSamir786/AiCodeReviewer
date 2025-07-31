# CodeReview.AI 🚀

An intelligent code review platform that analyzes your code in real-time and provides actionable feedback.  
Built with React and Node.js, featuring a beautiful UI with syntax highlighting and accessibility support.  
Perfect for developers seeking instant code quality insights and improvement suggestions.


![CodeReview.AI Interface](https://img.shields.io/badge/Status-Active-brightgreen) ![React](https://img.shields.io/badge/React-18+-blue) ![Node.js](https://img.shields.io/badge/Node.js-16+-green) ![Express](https://img.shields.io/badge/Express-5+-lightgrey)

## ✨ Features

- **Real-time Code Analysis** - Get instant feedback on your code
- **Beautiful UI** - Modern, responsive design with accessibility in mind
- **Syntax Highlighting** - Powered by Prism.js for beautiful code display
- **Interactive Editor** - Live code editing with real-time syntax highlighting
- **Loading States** - Smooth animations and user feedback
- **Error Handling** - Graceful error handling with user-friendly messages
- **Accessibility** - Screen reader support and keyboard navigation

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Prism.js** - Syntax highlighting
- **Axios** - HTTP client
- **react-simple-code-editor** - Code editor component

### Backend
- **Node.js** - JavaScript runtime
- **Express 5** - Web framework
- **CORS** - Cross-origin resource sharing
- **Google Generative AI** - AI-powered code analysis (ready for integration)

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ShaikhSamir786/aicodereview.git
   cd aicodereview
   ```

2. **Install dependencies**
   ```bash
   # Install backend dependencies
   cd server
   npm install
   
   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Start the development servers**
   
   **Backend (Terminal 1):**
   ```bash
   cd server
   npm start
   # Server runs on http://localhost:3000
   ```
   
   **Frontend (Terminal 2):**
   ```bash
   cd frontend
   npm run dev
   # Frontend runs on http://localhost:5173 (or 5174 if 5173 is busy)
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to use the application

## 📁 Project Structure

```
aicodereview/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── App.jsx          # Main application component
│   │   ├── main.jsx         # React entry point
│   │   └── index.css        # Global styles
│   ├── public/              # Static assets
│   ├── package.json         # Frontend dependencies
│   ├── vite.config.js       # Vite configuration
│   └── eslint.config.js     # ESLint configuration
├── server/                  # Express backend API
│   ├── index.js             # Main server file
│   ├── ai.controller.js     # AI controller (future)
│   ├── ai.routes.js         # AI routes (future)
│   ├── ai.service.js        # AI service (future)
│   └── package.json         # Backend dependencies
└── README.md                # This file
```

## 🔌 API Endpoints

### POST `/ai/generate`
Analyzes the provided code and returns review feedback.

**Request Body:**
```json
{
  "code": "function sum(a, b) {\n  return a + b;\n}"
}
```

**Response:**
```json
{
  "code": "function sum(a, b) {\n  return a + b;\n}",
  "response": "This is a dummy AI response for your code review",
  "suggestions": [
    "Add proper error handling",
    "Consider adding comments",
    "Add type annotations"
  ]
}
```

### GET `/test-cors`
Test endpoint to verify CORS configuration.

**Response:**
```json
{
  "message": "CORS working!"
}
```

## 🎨 UI Components

### Code Editor
- Syntax highlighting for JavaScript/JSX
- Real-time editing
- Responsive design
- Accessibility features

### Review Output Panel
- Loading animations
- Error states
- Results display
- Responsive layout

### Navigation
- Brand logo with SVG icon
- GitHub link
- Clean, professional design

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the server directory for production:

```env
PORT=3000
NODE_ENV=production
# Add your AI API keys here when integrating real AI services
```

### Tailwind CSS
The project uses Tailwind CSS v4 with the new Vite plugin. Configuration is handled automatically.

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
cd frontend
npm run build
# Deploy the dist/ folder
```

### Backend (Railway/Heroku)
```bash
cd server
# Deploy with your preferred platform
```

## 🔄 Development Workflow

### Frontend Development
```bash
cd frontend
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

### Backend Development
```bash
cd server
npm start          # Start server
npm run dev        # Start with nodemon (if configured)
```

## 🤖 AI Integration (Coming Soon)

The project is structured to easily integrate with AI services:
- Google Generative AI dependency already installed
- Modular AI service architecture
- Environment-based configuration

## 🎯 Roadmap

- [ ] Integrate real AI code analysis
- [ ] Support multiple programming languages
- [ ] Add user authentication
- [ ] Save and share code reviews
- [ ] Advanced code metrics
- [ ] Custom review rules
- [ ] Dark/Light theme toggle
- [ ] Code diff visualization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Shaikh Samir**
- GitHub: [@ShaikhSamir786](https://github.com/ShaikhSamir786)

## 🙏 Acknowledgments

- [Prism.js](https://prismjs.com/) for syntax highlighting
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [React Simple Code Editor](https://github.com/satya164/react-simple-code-editor) for the code editor
- [Vite](https://vitejs.dev/) for the amazing build tool

---

<div align="center">
  <p>Made with ❤️ for developers by developers</p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>
