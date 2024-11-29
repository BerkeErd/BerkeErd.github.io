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

    function renderMusicCatalog() {
      const musicCatalogElement = document.getElementById('musicCatalog');
      
      musicCatalog.forEach(track => {
        const cardColumn = document.createElement('div');
        cardColumn.className = 'col-md-4 mb-4';
        
        cardColumn.innerHTML = `
          <div class="card">
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
            <div class="card-body">
              <h5 class="card-title text-center">${track.title}</h5>
              <audio controls class="w-100">
                <source src="${track.audioSrc}" type="audio/mpeg">
                Your browser does not support the audio element.
              </audio>
              <div class="music-links ">
                <a href="${track.youtubeLink}" class="btn btn-danger" target="_blank">
                  <i class="fab fa-youtube"></i> YouTube
                </a>
              </div>
            </div>
          </div>
        `;
        
        musicCatalogElement.appendChild(cardColumn);
      });
    }

    document.addEventListener('DOMContentLoaded', renderMusicCatalog);

    