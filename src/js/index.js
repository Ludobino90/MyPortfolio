// Mostrar e ocultar projetos
const toggleProjectsButton = document.querySelector('.btn-mostrar-projetos');
const allProjects = document.querySelectorAll('.projeto');

toggleProjectsButton.addEventListener("click", () => {
  const isShowingMore = toggleProjectsButton.textContent === "Show More";

  if (isShowingMore) {
    allProjects.forEach(project => project.classList.add('ativo'));
    toggleProjectsButton.textContent = "Show Less";
  } else {
    allProjects.forEach((project, index) => {
      if (index > 3) {
        project.classList.remove('ativo');
      }
    });
    toggleProjectsButton.textContent = "Show More";
  }
});

// Modal do CV
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('cv-modal');
  const openBtn = document.getElementById('open-cv-modal');
  const closeBtn = modal.querySelector('.close');

  if (openBtn && modal && closeBtn) {
    openBtn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.remove('hidden');
    });

    closeBtn.addEventListener('click', () => {
      modal.classList.add('hidden');
    });

    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
      }
    });
  }
});
