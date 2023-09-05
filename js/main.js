document.addEventListener("DOMContentLoaded", function() {
    const projectDetails = {
      "stick-slasher": "Stick Slasher oyununun detayları burada olacak.",
      // Diğer projelerin detayları
    };
  
    const projectDetailsDiv = document.getElementById('project-details');
  
    $('#projectCarousel').on('slid.bs.carousel', function () {
      const activeItem = document.querySelector('.carousel-item.active');
      const projectId = activeItem.getAttribute('data-project');
      projectDetailsDiv.innerHTML = projectDetails[projectId];
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const projectDetails = {
      "stick-slasher": "Stick Slasher oyununun detayları burada olacak.",
      // Diğer projeler
    };
  
    const projectModal = document.getElementById('projectModal').querySelector('.modal-body');
  
    document.querySelectorAll('.project-card').forEach(function(card) {
      card.addEventListener('click', function() {
        const projectId = card.getAttribute('data-project');
        projectModal.innerHTML = projectDetails[projectId];
        $('#projectModal').modal('show');
      });
    });
  });
  
  
  


  