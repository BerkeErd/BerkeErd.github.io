// Beruke Games Music Page - Arcade Theme

// Müzik kataloğu verisi
const musicCatalog = [
  {
    title: "Vortex of Solitude",
    spotifyEmbedLink: "https://open.spotify.com/embed/track/2uiyjgPNQVrtXTcO15RDcr?utm_source=generator",
    audioSrc: "music/Vortex of Solitude.mp3",
    youtubeLink: "https://www.youtube.com/watch?v=eX-zeIlUYS8",
  },
  {
    title: "Glimmerdrive", 
    spotifyEmbedLink: "https://open.spotify.com/embed/track/5ZzkpYs5MtPgq31VC3v8DY?utm_source=generator",
    audioSrc: "music/Glimmerdrive.mp3",
    youtubeLink: "https://www.youtube.com/watch?v=TtLk7b1nENM",
  },
  {
    title: "Vanguard", 
    spotifyEmbedLink: "https://open.spotify.com/embed/track/7eWXU6OPBAf8Dxv9fGEpCn?utm_source=generator",
    audioSrc: "music/Vanguard.mp3",
    youtubeLink: "https://www.youtube.com/watch?v=2dHJrEtCotg",
  }
];

// Müzik kartlarını oluştur
function renderMusicCatalog() {
  const musicCatalogElement = document.getElementById('musicCatalog');
  
  // Başlık ekle
  const titleElement = document.createElement('div');
  titleElement.className = 'col-12 text-center mb-4';
  titleElement.innerHTML = `
    <h1 class="neon-title">Beruke Music</h1>
    <div class="title-underline"></div>
  `;
  musicCatalogElement.appendChild(titleElement);
  
  // Görselleştirici ekle
  const visualizerElement = document.createElement('div');
  visualizerElement.className = 'col-12 mb-5';
  visualizerElement.innerHTML = `
    <div class="audio-visualizer">
      <div class="visualizer-bar"></div>
      <div class="visualizer-bar"></div>
      <div class="visualizer-bar"></div>
      <div class="visualizer-bar"></div>
      <div class="visualizer-bar"></div>
      <div class="visualizer-bar"></div>
      <div class="visualizer-bar"></div>
      <div class="visualizer-bar"></div>
      <div class="visualizer-bar"></div>
      <div class="visualizer-bar"></div>
    </div>
  `;
  musicCatalogElement.appendChild(visualizerElement);
  
  // Görselleştirici animasyonu
  animateVisualizer();
  
  // Müzik kartlarını ekle
  musicCatalog.forEach(track => {
    const cardColumn = document.createElement('div');
    cardColumn.className = 'col-md-4 mb-4';
    
    cardColumn.innerHTML = `
      <div class="arcade-card">
        <div class="card-glow"></div>
        <div class="card-header">
          <h3 class="card-title">${track.title}</h3>
        </div>
        <div class="card-body">
          <iframe 
            class="spotify-embed" 
            src="${track.spotifyEmbedLink}" 
            width="100%" 
            height="352" 
            frameBorder="0" 
            allowfullscreen 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy">
          </iframe>
          <audio controls class="custom-audio-player w-100 mt-3">
            <source src="${track.audioSrc}" type="audio/mpeg">
            Your browser does not support the audio element.
          </audio>
          <div class="music-links mt-3 text-center">
            <a href="${track.youtubeLink}" class="btn btn-arcade youtube" target="_blank">
              <i class="fab fa-youtube"></i> YouTube
            </a>
          </div>
        </div>
      </div>
    `;
    
    musicCatalogElement.appendChild(cardColumn);
  });
}

// Görselleştirici animasyonu
function animateVisualizer() {
  const bars = document.querySelectorAll('.visualizer-bar');
  
  bars.forEach(bar => {
    const height = Math.random() * 100;
    bar.style.height = `${height}%`;
  });
  
  setTimeout(animateVisualizer, 100);
}

// WebGL arka plan
function setupBackground() {
  // Canvas elementi var mı kontrol et
  const canvas = document.getElementById('bg-canvas');
  if (!canvas || typeof THREE === 'undefined') return;
  
  // Three.js kurulumu
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 50;
  
  const renderer = new THREE.WebGLRenderer({ 
    canvas: canvas, 
    antialias: true,
    alpha: true 
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  
  // Parçacıklar oluştur
  const particlesGeometry = new THREE.BufferGeometry();
  const particleCount = 300;
  
  const positionArray = new Float32Array(particleCount * 3);
  const colorArray = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount * 3; i += 3) {
    // Konumlar
    positionArray[i] = (Math.random() - 0.5) * 100;
    positionArray[i + 1] = (Math.random() - 0.5) * 100;
    positionArray[i + 2] = (Math.random() - 0.5) * 100;
    
    // Renkler (turuncu ve mavi/yeşil)
    const colorType = Math.random();
    if (colorType < 0.5) {
      // Turuncu/kırmızı ton
      colorArray[i] = Math.random() * 0.6 + 0.4; // R
      colorArray[i + 1] = Math.random() * 0.3; // G
      colorArray[i + 2] = Math.random() * 0.1; // B
    } else {
      // Mavi/yeşil ton
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
    opacity: 0.5,
    vertexColors: true,
    blending: THREE.AdditiveBlending
  });
  
  const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particleSystem);
  
  // Animasyon fonksiyonu
  function animate() {
    requestAnimationFrame(animate);
    
    particleSystem.rotation.x += 0.0003;
    particleSystem.rotation.y += 0.0003;
    
    renderer.render(scene, camera);
  }
  
  // Pencere boyutu değiştiğinde
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
  
  // Animasyonu başlat
  animate();
}

// Stilleri enjekte et
function injectArcadeStyles() {
  const styleElement = document.createElement('style');
  styleElement.textContent = `
    /* Arcade Music Styles */
    body {
      background-color: #0a151d; 
      color: white;
    }
    
    .scanlines {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.02) 50%,
        rgba(255, 255, 255, 0) 100%
      );
      background-size: 100% 2px;
      z-index: 1000;
      pointer-events: none;
      opacity: 0.3;
    }
    
    .neon-title {
      font-family: 'Press Start 2P', monospace;
      color: #fff;
      text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fe4c01, 
                   0 0 20px #fe4c01, 0 0 25px #fe4c01;
      margin-top: 30px;
      font-size: 2.5rem;
      animation: neon-flicker 2s infinite alternate ease-in-out;
    }
    
    .title-underline {
      width: 100px;
      height: 4px;
      background: linear-gradient(90deg, #fe4c01, #00e5aa);
      margin: 20px auto;
      border-radius: 2px;
    }
    
    .arcade-subtitle {
      margin-top: 20px;
      color: #ddd;
    }
    
    .audio-visualizer {
      display: flex;
      align-items: flex-end;
      gap: 5px;
      height: 120px;
      max-width: 600px;
      margin: 0 auto;
      background: rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      padding: 20px;
      border: 2px solid #fe4c01;
    }
    
    .visualizer-bar {
      flex: 1;
      background: linear-gradient(to top, #fe4c01, #00e5aa);
      height: 50%;
      border-radius: 3px;
      transition: height 0.1s ease;
    }
    
    .arcade-card {
      background-color: rgba(26, 26, 26, 0.8);
      border: 2px solid #fe4c01;
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 0 15px rgba(254, 76, 1, 0.5);
      margin-bottom: 30px;
      position: relative;
      transition: all 0.3s ease;
      height: 100%;
    }
    
    .arcade-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 0 25px rgba(254, 76, 1, 0.7);
    }
    
    .card-glow {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      border-radius: 15px;
      box-shadow: inset 0 0 20px rgba(254, 76, 1, 0.3);
      z-index: 1;
    }
    
    .card-header {
      padding: 15px;
      background-color: rgba(15, 26, 34, 0.8);
      border-bottom: 2px solid #fe4c01;
    }
    
    .card-title {
      margin: 0;
      text-align: center;
      font-family: 'Press Start 2P', monospace;
      font-size: 1rem;
      color: white;
      text-shadow: 0 0 5px #fe4c01;
    }
    
    .card-body {
      padding: 20px;
    }
    
    .custom-audio-player {
      border-radius: 20px;
      background-color: rgba(15, 26, 34, 0.7);
      border: 2px solid #00e5aa;
    }
    
    .btn-arcade {
      background-color: #ff0000;
      color: white;
      border: none;
      border-radius: 20px;
      padding: 8px 20px;
      font-family: 'Press Start 2P', monospace;
      font-size: 0.8rem;
      transition: all 0.3s ease;
    }
    
    .btn-arcade:hover {
      transform: translateY(-3px);
      box-shadow: 0 0 10px currentColor;
      color: white;
    }
    
    .btn-arcade.youtube {
      background-color: #FF0000;
    }
    
    @keyframes neon-flicker {
      0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
        text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fe4c01, 
                    0 0 20px #fe4c01, 0 0 25px #fe4c01;
      }
      20%, 24%, 55% {
        text-shadow: none;
      }
    }
    
    @media (max-width: 768px) {
      .neon-title {
        font-size: 1.8rem;
      }
      .card-title {
        font-size: 0.8rem;
      }
      .btn-arcade {
        font-size: 0.7rem;
        padding: 6px 15px;
      }
      .audio-visualizer {
        height: 80px;
      }
    }
  `;
  
  document.head.appendChild(styleElement);
}

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', function() {
  // Stilleri ekle
  injectArcadeStyles();
  
  // Müzik kataloğunu oluştur
  renderMusicCatalog();
  
  // Arka planı kur (eğer Three.js varsa)
  setupBackground();
  
  // Scanlines efekti ekle
  if (!document.querySelector('.scanlines')) {
    const scanlines = document.createElement('div');
    scanlines.className = 'scanlines';
    document.body.appendChild(scanlines);
  }
});