# Ruya UAE - Smart Finance App

A React frontend application that replicates the exact design of the Ruya UAE finance dashboard. This is a modern, responsive finance app with a dark theme and gamified financial wellness features.

## Features

- **Modern Dashboard Design**: Dark gradient background with glassmorphism effects
- **Ruya Card**: Beautiful gradient card showing balance and card details
- **Daily Financial Tips**: Interactive tips section with carousel indicators
- **Learning Path**: Course cards with progress tracking and locked content
- **Quick Actions**: Grid of action buttons for common tasks
- **Progress Tracking**: User stats including streak, XP points, and badges
- **Bottom Navigation**: Fixed navigation bar with active state indicators

## Tech Stack

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **Remix Icons**: Beautiful icon library
- **PostCSS**: CSS processing

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone or download this project
2. Navigate to the project directory:
   ```bash
   cd financeapp
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── Header.jsx           # Top header with greeting and notification
│   ├── RuwaCard.jsx         # Main card component with gradient
│   ├── DailyTips.jsx        # Financial tips section
│   ├── LearningPath.jsx     # Course cards with images
│   ├── QuickActions.jsx     # Action buttons grid
│   ├── YourProgress.jsx     # Progress stats and level bar
│   └── BottomNavigation.jsx # Fixed bottom navigation
├── App.jsx                  # Main app component
├── main.jsx                 # React entry point
└── index.css                # Global styles and Tailwind imports
```

## Design Features

- **Responsive Design**: Works on mobile and desktop
- **Glassmorphism**: Backdrop blur effects with transparency
- **Gradient Backgrounds**: Beautiful color transitions
- **Hover Effects**: Interactive elements with smooth transitions
- **Icon Integration**: Remix Icons for consistent iconography
- **Color Scheme**: Dark theme with emerald, cyan, purple, and yellow accents

## Customization

The app uses Tailwind CSS for styling, making it easy to customize:

- Colors are defined in `tailwind.config.js`
- Component styles are in individual JSX files
- Global styles are in `src/index.css`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for educational purposes and replicates the design from the provided website.
