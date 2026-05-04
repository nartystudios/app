// Snake Game - Client-side JavaScript
// Configurações do jogo
const GRID_SIZE = 20;
const SNAKE_SPEED = 200;

// Estado do jogo
let snake = [{x: 10, y: 10}, {x: 9, y: 10}];
let food = {x: Math.floor(Math.random() * GRID_SIZE), y: Math.floor(Math.random() * GRID_SIZE)};
let score = 0;
let direction = 'RIGHT';

// Funções do jogo
function createFood() {
  food = {
    x: Math.floor(Math.random() * GRID_SIZE),
    y: Math.floor(Math.random() * GRID_SIZE)
  };
}

function updateSnake() {
  // Movimento da snake
  const head = {x: snake[0].x, y: snake[0].y};
  switch(direction) {
    case 'UP': head.y -= 1; break;
    case 'DOWN': head.y += 1; break;
    case 'LEFT': head.x -= 1; break;
    case 'RIGHT': head.x += 1; break;
  }

  // Verificar colisão
  if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE ||
      snake.some(segment => segment.x === head.x && segment.y === head.y)) {
    gameOver();
    return;
  }

  snake.unshift(head);

  // Comer comida
  if (head.x === food.x && head.y === food.y) {
    score++;
    createFood();
  } else {
    snake.pop();
  }
}

function gameOver() {
  console.log('GAME OVER! Score:', score);
  snake = [{x: 10, y: 10}, {x: 9, y: 10}];
  score = 0;
  direction = 'RIGHT';
  food = {x: Math.floor(Math.random() * GRID_SIZE), y: Math.floor(Math.random() * GRID_SIZE)};
}

// Tornar funções globais para uso no index.html
window.updateSnake = updateSnake;
window.SNAKE_SPEED = SNAKE_SPEED;