# Tenzies

A classic dice game built with React and Vite. Roll the dice and try to get all ten showing the same number!

## How to Play

1. Roll the dice using the **Roll Dice** button.
2. Click any die to **freeze** it at its current value — frozen dice turn green.
3. Keep rolling until **all ten dice show the same number**.
4. When you win, confetti flies and you can start a **New Game**.

## Features

- 10 interactive dice with hold/release toggle
- Win detection with confetti animation
- Accessible — dice announce their value and held state to screen readers
- Auto-focus on the New Game button when the game is won

## Tech Stack

- [React](https://react.dev/) — UI and state management
- [Vite](https://vitejs.dev/) — build tool and dev server
- [nanoid](https://github.com/ai/nanoid) — unique IDs for each die
- [react-confetti](https://github.com/alampros/react-confetti) — win celebration

## Getting Started

```bash
cd tenzies
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
├── App.jsx          # Main game logic and state
├── Die.jsx          # Individual die component
├── useWindowSize.js # Custom hook for confetti sizing
├── App.css          # Game styles
└── index.css        # Global styles
```
