
let scene, camera, renderer;
let particles, particleSystem;

function initWebGL() {
  const canvas = document.getElementById('bg-canvas');
  
  scene = new THREE.Scene();
  
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 50;
  
  renderer = new THREE.WebGLRenderer({ 
    canvas: canvas, 
    antialias: true,
    alpha: true 
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  
  const particlesGeometry = new THREE.BufferGeometry();
  const particleCount = 300;
  
  const positionArray = new Float32Array(particleCount * 3);
  const colorArray = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount * 3; i += 3) {
    positionArray[i] = (Math.random() - 0.5) * 100;
    positionArray[i + 1] = (Math.random() - 0.5) * 100;
    positionArray[i + 2] = (Math.random() - 0.5) * 100;
    
    const colorType = Math.random();
    if (colorType < 0.5) {
      colorArray[i] = Math.random() * 0.6 + 0.4; // R
      colorArray[i + 1] = Math.random() * 0.3; // G
      colorArray[i + 2] = Math.random() * 0.1; // B
    } else {
      colorArray[i] = Math.random() * 0.1; // R
      colorArray[i + 1] = Math.random() * 0.6 + 0.4; // G
      colorArray[i + 2] = Math.random() * 0.4; // B
    }
  }
  
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positionArray, 3));
  particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));
  
  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.3,
    transparent: true,
    opacity: 0.7,
    vertexColors: true,
    blending: THREE.AdditiveBlending
  });
  
  particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particleSystem);
  
  window.addEventListener('resize', onWindowResize);
  
  document.addEventListener('mousemove', onMouseMove);
  
  animate();
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function onMouseMove(event) {
  const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  
  gsap.to(particleSystem.rotation, {
    x: mouseY * 0.1,
    y: mouseX * 0.1,
    duration: 2
  });
}

function animate() {
  requestAnimationFrame(animate);
  
  particleSystem.rotation.x += 0.0005;
  particleSystem.rotation.y += 0.0005;
  
  renderer.render(scene, camera);
}

function initScrollAnimations() {
  document.querySelector('.scroll-indicator').addEventListener('click', function() {
    const featuredSection = document.getElementById('featured-game');
    featuredSection.scrollIntoView({ behavior: 'smooth' });
  });
  
  const animateOnScroll = function() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionBottom = section.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight * 0.75 && sectionBottom > 0) {
        section.classList.add('animate');
        
        const animatedElements = section.querySelectorAll('.feature-card, .feature-media, .mini-preview, .arcade-teaser');
        
        animatedElements.forEach((element, index) => {
          gsap.to(element, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power2.out'
          });
        });
      }
    });
  };
  
  animateOnScroll();
  
  window.addEventListener('scroll', animateOnScroll);
  
  gsap.from('.main-logo', { opacity: 0, scale: 0.8, duration: 1, ease: 'power2.out' });
  gsap.from('.primary-text', { opacity: 0, y: 30, duration: 1, delay: 0.5, ease: 'power2.out' });
  gsap.from('.hero-cta', { opacity: 0, y: 30, duration: 1, delay: 0.8, ease: 'power2.out' });
  gsap.from('.scroll-indicator', { opacity: 0, y: 30, duration: 1, delay: 1.2, ease: 'power2.out' });
}

function initMediaControls() {
  const playBtn = document.querySelector('.play-btn');
  const screenshotBtn = document.querySelector('.screenshot-btn');
  const videoContainer = document.querySelector('.video-container');
  
  screenshotBtn.addEventListener('click', function() {
    playBtn.classList.remove('active');
    screenshotBtn.classList.add('active');
    
    $('#screenshotsModal').modal('show');
  });
  
  playBtn.addEventListener('click', function() {
    screenshotBtn.classList.remove('active');
    playBtn.classList.add('active');
    
    $('#screenshotsModal').modal('hide');
  });
  
  const screenshots = document.querySelectorAll('.screenshot');
  const prevBtn = document.querySelector('.screenshot-nav.prev');
  const nextBtn = document.querySelector('.screenshot-nav.next');
  let currentScreenshot = 0;
  
  if (screenshots.length > 0) {
    screenshots[0].classList.add('active');
  }
  
  nextBtn.addEventListener('click', function() {
    screenshots[currentScreenshot].classList.remove('active');
    currentScreenshot = (currentScreenshot + 1) % screenshots.length;
    screenshots[currentScreenshot].classList.add('active');
  });
  
  prevBtn.addEventListener('click', function() {
    screenshots[currentScreenshot].classList.remove('active');
    currentScreenshot = (currentScreenshot - 1 + screenshots.length) % screenshots.length;
    screenshots[currentScreenshot].classList.add('active');
  });
}


function initSnakeGame() {
  document.querySelector('.main-logo').addEventListener('click', function() {
    launchSnakeGame();
  });

  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let konamiIndex = 0;

  document.addEventListener('keydown', function(e) {
    if (e.key === konamiCode[konamiIndex] || e.key.toLowerCase() === konamiCode[konamiIndex].toLowerCase()) {
      konamiIndex++;
      if (konamiIndex === konamiCode.length) {
        launchSnakeGame();
        konamiIndex = 0;
      }
    } else {
      konamiIndex = 0;
    }
  });
}

function launchSnakeGame() {
  if (document.querySelector('.snake-game')) return;
  
  const gameContainer = document.createElement('div');
  gameContainer.className = 'snake-game';
  gameContainer.innerHTML = `
    <div class="game-header">
      <div class="game-score">Score: <span>0</span></div>
      <button class="game-close"><i class="fas fa-times"></i></button>
    </div>
    <canvas id="snake-canvas" width="300" height="300"></canvas>
    <div class="game-controls">
      <div class="control-hint">Use arrow keys to play</div>
      <div class="mobile-controls">
        <button class="dir-btn" data-dir="up"><i class="fas fa-arrow-up"></i></button>
        <div class="horizontal-controls">
          <button class="dir-btn" data-dir="left"><i class="fas fa-arrow-left"></i></button>
          <button class="dir-btn" data-dir="right"><i class="fas fa-arrow-right"></i></button>
        </div>
        <button class="dir-btn" data-dir="down"><i class="fas fa-arrow-down"></i></button>
      </div>
    </div>
  `;
  
  document.body.appendChild(gameContainer);
  
  setTimeout(() => {
    gameContainer.classList.add('active');
  }, 10);
  
  gameContainer.querySelector('.game-close').addEventListener('click', function() {
    gameContainer.classList.remove('active');
    setTimeout(() => {
      gameContainer.remove();
    }, 300);
  });
  
  initSnake();
}

function initSnake() {
  const canvas = document.getElementById('snake-canvas');
  const ctx = canvas.getContext('2d');
  const scoreElement = document.querySelector('.snake-game .game-score span');
  
  const gridSize = 15;
  const tileCount = canvas.width / gridSize;
  
  let snake = [
    {x: 10, y: 10},
    {x: 9, y: 10},
    {x: 8, y: 10}
  ];
  
  let velocity = {x: 1, y: 0};
  let nextVelocity = {x: 1, y: 0};
  
  let food = {
    x: Math.floor(Math.random() * tileCount),
    y: Math.floor(Math.random() * tileCount)
  };
  
  let score = 0;
  let isGameOver = false;
  
  function gameLoop() {
    if (!document.getElementById('snake-canvas')) return;
    if (isGameOver) return;
    
    updateSnake();
    checkCollision();
    
    if (!isGameOver) {
      drawGame();
      const speed = Math.max(5, 10 - Math.floor(score / 5));
      setTimeout(gameLoop, 1000 / speed);
    }
  }
  
  function updateSnake() {
    velocity = nextVelocity;
    
    const head = {
      x: snake[0].x + velocity.x,
      y: snake[0].y + velocity.y
    };
    
    if (head.x < 0) head.x = tileCount - 1;
    if (head.x >= tileCount) head.x = 0;
    if (head.y < 0) head.y = tileCount - 1;
    if (head.y >= tileCount) head.y = 0;
    
    snake.unshift(head);
    
    if (head.x === food.x && head.y === food.y) {
      score++;
      scoreElement.textContent = score;
      
      document.querySelector('.snake-game').style.borderColor = getRandomNeonColor();
      
      placeFood();
    } else {
      snake.pop();
    }
  }
  
  function checkCollision() {
    const head = snake[0];
    
    for (let i = 1; i < snake.length; i++) {
      if (head.x === snake[i].x && head.y === snake[i].y) {
        gameOver();
        return;
      }
    }
  }
  
  function gameOver() {
    isGameOver = true;
    drawGame();
    ctx.fillStyle = 'rgba(0, 0, 0, 0.75)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#fe4c01';
    ctx.font = "20px 'Press Start 2P'";
    ctx.textAlign = 'center';
    ctx.fillText('GAME OVER', canvas.width / 2, canvas.height / 2 - 20);
    
    ctx.fillStyle = 'white';
    ctx.font = "14px 'Press Start 2P'";
    ctx.fillText(`Score: ${score}`, canvas.width / 2, canvas.height / 2 + 20);
    
    ctx.font = "10px 'Press Start 2P'";
    ctx.fillText('Click to restart', canvas.width / 2, canvas.height / 2 + 50);
    
    canvas.addEventListener('click', restartGame);
  }
  
  function restartGame() {
    canvas.removeEventListener('click', restartGame);
    
    snake = [
      {x: 10, y: 10},
      {x: 9, y: 10},
      {x: 8, y: 10}
    ];
    velocity = {x: 1, y: 0};
    nextVelocity = {x: 1, y: 0};
    score = 0;
    scoreElement.textContent = score;
    placeFood();
    
    document.querySelector('.snake-game').style.borderColor = '#fe4c01';
    
    isGameOver = false;
    gameLoop();
  }
  
  function placeFood() {
    let newFood;
    let validPosition = false;
    
    while (!validPosition) {
      newFood = {
        x: Math.floor(Math.random() * tileCount),
        y: Math.floor(Math.random() * tileCount)
      };
      
      validPosition = true;
      
      for (let segment of snake) {
        if (segment.x === newFood.x && segment.y === newFood.y) {
          validPosition = false;
          break;
        }
      }
    }
    
    food = newFood;
  }
  
  function drawGame() {
    ctx.fillStyle = 'rgba(15, 26, 34, 0.9)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;
    
    for (let i = 0; i < tileCount; i++) {
      ctx.beginPath();
      ctx.moveTo(i * gridSize, 0);
      ctx.lineTo(i * gridSize, canvas.height);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(0, i * gridSize);
      ctx.lineTo(canvas.width, i * gridSize);
      ctx.stroke();
    }
    
    const glowSize = 2 + Math.sin(Date.now() / 200) * 2;
    
    ctx.fillStyle = '#00e5aa';
    ctx.shadowColor = '#00e5aa';
    ctx.shadowBlur = glowSize;
    ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);
    ctx.shadowBlur = 0;
    
    for (let i = 0; i < snake.length; i++) {
      const segment = snake[i];
      
      if (i === 0) {
        ctx.fillStyle = '#fe4c01'; // Baş rengi
        ctx.shadowColor = '#fe4c01';
        ctx.shadowBlur = 5;
      } else {
        const colorValue = Math.max(150, 255 - (i * 2));
        ctx.fillStyle = `rgba(254, 76, 1, ${1 - i * 0.02})`;
        ctx.shadowBlur = 0;
      }
      
      const padding = 1;
      const size = gridSize - padding * 2;
      
      ctx.fillRect(
        segment.x * gridSize + padding, 
        segment.y * gridSize + padding, 
        size, 
        size
      );
    }
    
    ctx.shadowBlur = 0;
  }
  
  function getRandomNeonColor() {
    const neonColors = [
      '#fe4c01', // Turuncu
      '#00e5aa', // Yeşil
      '#ff00ff', // Mor
      '#00ffff', // Turkuaz
      '#ffff00'  // Sarı
    ];
    
    return neonColors[Math.floor(Math.random() * neonColors.length)];
  }
  
  document.addEventListener('keydown', function(e) {
    switch(e.key) {
      case 'ArrowUp':
        if (velocity.y === 0) nextVelocity = {x: 0, y: -1};
        break;
      case 'ArrowDown':
        if (velocity.y === 0) nextVelocity = {x: 0, y: 1};
        break;
      case 'ArrowLeft':
        if (velocity.x === 0) nextVelocity = {x: -1, y: 0};
        break;
      case 'ArrowRight':
        if (velocity.x === 0) nextVelocity = {x: 1, y: 0};
        break;
    }
  });
  
  document.querySelectorAll('.dir-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const direction = this.getAttribute('data-dir');
      
      switch(direction) {
        case 'up':
          if (velocity.y === 0) nextVelocity = {x: 0, y: -1};
          break;
        case 'down':
          if (velocity.y === 0) nextVelocity = {x: 0, y: 1};
          break;
        case 'left':
          if (velocity.x === 0) nextVelocity = {x: -1, y: 0};
          break;
        case 'right':
          if (velocity.x === 0) nextVelocity = {x: 1, y: 0};
          break;
      }
    });
  });
  
  placeFood();
  gameLoop();
}

function addSnakeGameStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .snake-game {
      position: fixed;
      bottom: -400px;
      right: 20px;
      width: 300px;
      background-color: rgba(10, 21, 29, 0.95);
      border: 3px solid #fe4c01;
      border-radius: 15px;
      z-index: 1500;
      transition: bottom 0.3s ease;
      overflow: hidden;
      box-shadow: 0 0 20px rgba(254, 76, 1, 0.7);
    }
    
    .snake-game.active {
      bottom: 20px;
    }
    
    .game-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 15px;
      background-color: rgba(0, 0, 0, 0.5);
      border-bottom: 2px solid #fe4c01;
    }
    
    .game-score {
      font-family: 'Press Start 2P', monospace;
      font-size: 0.9rem;
      color: white;
    }
    
    .game-close {
      background: none;
      border: none;
      color: white;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    
    .game-close:hover {
      color: #fe4c01;
      transform: scale(1.2);
    }
    
    #snake-canvas {
      display: block;
      border-bottom: 2px solid rgba(254, 76, 1, 0.5);
    }
    
    .game-controls {
      padding: 10px;
      text-align: center;
    }
    
    .control-hint {
      font-family: 'Press Start 2P', monospace;
      font-size: 0.7rem;
      color: #aaa;
      margin-bottom: 10px;
    }
    
    .mobile-controls {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
    }
    
    .horizontal-controls {
      display: flex;
      gap: 40px;
    }
    
    .dir-btn {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 2px solid #00e5aa;
      background-color: rgba(0, 229, 170, 0.2);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    
    .dir-btn:hover, .dir-btn:active {
      background-color: rgba(0, 229, 170, 0.5);
    }
    
    @media (min-width: 769px) {
      .mobile-controls {
        display: none;
      }
    }
  `;
  
  document.head.appendChild(style);
}

document.addEventListener('DOMContentLoaded', function() {
  addSnakeGameStyles();
  
  initSnakeGame();
});

document.addEventListener('DOMContentLoaded', function() {
  initWebGL();
  
  gsap.set('.main-container', { visibility: 'visible' }); initScrollAnimations();
  
  initMediaControls();
  
  initEasterEgg();
  
  $('[data-toggle="tooltip"]').tooltip();
  
  document.querySelectorAll('.feature-card, .feature-media, .mini-preview, .arcade-teaser').forEach(element => {
    gsap.set(element, { opacity: 0, y: 30 });
  });
});
