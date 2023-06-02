// Get the canvas element
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

// Set up initial variables
let isRunning = false;
let dinoX = 20;
let dinoY = canvas.height - 10; // Adjusted Y position to fit the dinosaur image
let jumpHeight = 12;
let gravity = 1;
let velocity = 0;

// Set up cacti variables
let cacti = [];
const cactusWidth = 50; // Adjusted width to fit the cactus image
const cactusHeight = 50; // Adjusted height to fit the cactus image
const cactusSpeed = 5;
const cactusSpawnRate = 120; // Number of frames between cactus spawns
let cactusSpawnCounter = 0;

// Load dinosaur image
const dinoImage = new Image();
dinoImage.src = "dino.png"; // Replace with the path to your dinosaur image

// Load background image
const backgroundImage = new Image();
backgroundImage.src = "bg.png"; // Replace with the path to your background image


// Load cactus image
const cactusImage = new Image();
cactusImage.src = "cactus.png"; // Replace with the path to your cactus image

// Event listener for spacebar to make the dinosaur jump
document.addEventListener("keydown", function (event) {
  if (event.keyCode === 32 || event.keyCode === 38 || event.keyCode === 87 && !isRunning) {
    isRunning = true;
    jump();
  }
});

// Function to make the dinosaur jump
function jump() {
  velocity = -jumpHeight;
}

// Function to spawn a cactus
function spawnCactus() {
  const cactus = {
    x: canvas.width,
    y: canvas.height - cactusHeight,
  };
  cacti.push(cactus);
}

// Function to check collision between two rectangles
function checkCollision(rect1, rect2) {
    if (
      rect1.x < rect2.x + rect2.width &&
      rect1.x + rect1.width > rect2.x &&
      rect1.y < rect2.y + rect2.height &&
      rect1.y + rect1.height > rect2.y
    ) {
      return true;
    }
    return false;
  }
  
  // Game loop
  function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    // Draw the background image
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
  
    // Draw the dinosaur
    ctx.drawImage(dinoImage, dinoX, dinoY, 50, 50); // Adjusted size to fit the dinosaur image
  
    // Draw cacti obstacles
    for (let i = 0; i < cacti.length; i++) {
      const cactus = cacti[i];
      ctx.drawImage(cactusImage, cactus.x, cactus.y, cactusWidth, cactusHeight);
  
      // Move the cactus
      cactus.x -= cactusSpeed;
  
      // Create collision rectangles for the dinosaur and cactus
      const dinoRect = { x: dinoX, y: dinoY, width: 50, height: 50 }; // Adjusted size to fit the dinosaur image
      const cactusRect = { x: cactus.x, y: cactus.y, width: cactusWidth, height: cactusHeight };
  
      // Check collision with the dinosaur
      if (checkCollision(dinoRect, cactusRect)) {
        // Game over condition
        gameOver();
      }
  
      // Remove cacti that are off-screen
      if (cactus.x + cactusWidth < 0) {
        cacti.splice(i, 1);
        i--;
      }
    }
  
    // Spawn cacti periodically
    if (cactusSpawnCounter === cactusSpawnRate) {
      spawnCactus();
      cactusSpawnCounter = 0;
    } else {
      cactusSpawnCounter++;
    }
  
    // Apply gravity to the dinosaur
    dinoY += velocity;
    velocity += gravity;
  
    // Check if the dinosaur is on the ground
    if (dinoY > canvas.height - 50) {
      dinoY = canvas.height - 50;
      velocity = 0;
      isRunning = false;
    }
  
    // Call the game loop recursively
    requestAnimationFrame(gameLoop);
  }
gameLoop();  