# Tic-Tac-Toe Game

A fully interactive Tic-Tac-Toe game built using React (UMD) with state-driven logic and dynamic rendering.

## Features
- 3x3 grid layout
- Turn-based gameplay (X and O alternation)
- Winner detection (rows, columns, diagonals)
- Draw detection when the board is full
- Game reset functionality
- Prevention of moves after game completion
- Immutable state updates following React best practices

## Technologies Used
- React (UMD build)
- JavaScript (ES6+)
- HTML5
- CSS3 Grid

## Game Logic Overview
The board state is stored as an array of 9 elements.  
Each index represents a square in the 3x3 grid.

State management:
- `squares` → stores the board values
- `xIsNext` → tracks the current player

Winner detection checks all possible winning combinations.  
Draw detection occurs when all squares are filled and no winner exists.

## How to Run
1. Clone the repository
2. Open `index.html` in a browser
3. Play the game

No build tools or installation required.

## Project Structure
- `index.html` → Root HTML file
- `index.jsx` → React game logic
- `styles.css` → Game styling

## Future Improvements
- Highlight winning line
- Score tracking
- Restart confirmation modal
- Animations for moves
