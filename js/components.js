const SOCIAL_LINKS = `
  <a href="https://github.com/BerkeErd" target="_blank" class="social-icon">
    <i class="fab fa-github"></i>
  </a>
  <a href="https://www.linkedin.com/in/berkeerdeniz/" target="_blank" class="social-icon">
    <i class="fab fa-linkedin"></i>
  </a>
  <a href="https://www.youtube.com/channel/UCBRLT-ayrIoC6mfW4YCGCoA" target="_blank" class="social-icon">
    <i class="fab fa-youtube"></i>
  </a>
  <a href="https://open.spotify.com/intl-tr/artist/3wf6hYGGdJ4p1SgWYQx9q6?si=02ff344f890e46f7" target="_blank" class="social-icon">
    <i class="fab fa-spotify"></i>
  </a>
  <a href="https://beruke.itch.io/" target="_blank" class="social-icon">
    <i class="fab fa-itch-io"></i>
  </a>
  <a href="https://store.steampowered.com/search/?developer=Beruke%20Games" target="_blank" class="social-icon">
    <i class="fab fa-steam"></i>
  </a>
`;

function renderNavbar() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  
  const navHtml = `
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
      <a class="navbar-brand" href="index.html">Beruke Games</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item ${currentPath === 'index.html' ? 'active' : ''}">
            <a class="nav-link" href="index.html">Home</a>
          </li>
          <li class="nav-item ${currentPath === 'about.html' ? 'active' : ''}">
            <a class="nav-link" href="about.html">About Me</a>
          </li>
          <li class="nav-item ${currentPath === 'arcade-games.html' ? 'active' : ''}">
            <a class="nav-link" href="arcade-games.html">Games</a>
          </li>
          <li class="nav-item ${currentPath === 'contact.html' ? 'active' : ''}">
            <a class="nav-link" href="contact.html">Contact Me</a>
          </li>
          <li class="nav-item ${currentPath === 'music.html' ? 'active' : ''}">
            <a class="nav-link" href="music.html">Music</a>
          </li>
        </ul>
      </div>
    </nav>
  `;
  
  const container = document.getElementById('navbar-container');
  if (container) container.innerHTML = navHtml;
}

function renderFooter() {
  const footerStyles = `
    <style>
      .site-footer {
        text-align: center;
        padding: 30px 0;
        background-color: rgba(10, 10, 10, 0.9);
        border-top: 2px solid var(--primary-neon, #00e5aa);
        position: relative;
        z-index: 10;
        margin-top: 50px;
      }
      .footer-logo {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
        font-family: 'Press Start 2P', monospace;
        font-size: 1.2rem;
        color: white;
        text-shadow: 0 0 10px var(--primary-neon, #00e5aa);
      }
      .footer-copyright {
        margin-top: 15px;
        color: #aaa;
        font-size: 0.9rem;
      }
      .components-social-icons {
        display: flex;
        justify-content: center;
        gap: 20px;
        margin-top: 20px;
      }
      .components-social-icon {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white !important;
        font-size: 1.2rem;
        text-decoration: none !important;
        transition: all 0.3s ease;
        background-color: rgba(26, 26, 26, 0.8);
        border: 2px solid var(--primary-neon, #00e5aa);
      }
      .components-social-icon:hover {
        transform: translateY(-5px);
        color: var(--primary-neon, #00e5aa) !important;
        box-shadow: 0 0 15px var(--primary-neon, #00e5aa);
        background-color: rgba(0, 229, 170, 0.1);
      }
    </style>
  `;

  const footerHtml = `
    ${footerStyles}
    <footer class="site-footer">
      <div class="footer-content">
        <div class="footer-logo">
          <img src="https://imgur.com/47wFN7x.png" alt="Beruke Games Logo" width="40">
          <span>Beruke Games</span>
        </div>
        <div class="footer-copyright">
          <p>&copy; 2023 Beruke Games. All rights reserved.</p>
        </div>
        <div class="components-social-icons">
          <a href="https://github.com/BerkeErd" target="_blank" class="components-social-icon">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/berkeerdeniz/" target="_blank" class="components-social-icon">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://www.youtube.com/channel/UCBRLT-ayrIoC6mfW4YCGCoA" target="_blank" class="components-social-icon">
            <i class="fab fa-youtube"></i>
          </a>
          <a href="https://open.spotify.com/intl-tr/artist/3wf6hYGGdJ4p1SgWYQx9q6?si=02ff344f890e46f7" target="_blank" class="components-social-icon">
            <i class="fab fa-spotify"></i>
          </a>
          <a href="https://beruke.itch.io/" target="_blank" class="components-social-icon">
            <i class="fab fa-itch-io"></i>
          </a>
          <a href="https://store.steampowered.com/search/?developer=Beruke%20Games" target="_blank" class="components-social-icon">
            <i class="fab fa-steam"></i>
          </a>
        </div>
      </div>
    </footer>
  `;
  
  let container = document.getElementById('footer-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'footer-container';
    document.body.appendChild(container);
  }
  container.innerHTML = footerHtml;
}

function optimizeWebGLBackground() {
  const currentPath = window.location.pathname.split('/').pop();
  if (currentPath === 'about.html' || currentPath === 'contact.html') {
    // If scene exists from a previously injected initWebGL, slow it down
    if (typeof particleSystem !== 'undefined' && particleSystem) {
      // We will monkey patch the animate function to skip frames or slow rotation
      // Actually, we can just slow down the rotation
      particleSystem.rotationSpeedModifier = 0.0001; // Slower than default 0.0003
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderNavbar();
  renderFooter();
  setTimeout(optimizeWebGLBackground, 100);
});
