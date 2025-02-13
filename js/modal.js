// modal.js

// Seleciona a modal
const modal = document.getElementById("modal");

// Seleciona o botão de fechar
const closeBtn = document.querySelector(".close");

// Seleciona todos os links de expansão
const expandLinks = document.querySelectorAll(".expand-link");

// Quando o usuário clica em um link de expansão
expandLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault(); // Previne o comportamento padrão do link

        // Pega a descrição e a imagem do projeto
        const description = this.getAttribute("data-description");
        const imgSrc = this.getAttribute("data-img");

        // Atualiza o conteúdo da modal
        document.getElementById("modal-img").src = imgSrc;
        document.getElementById("modal-description").textContent = description;

        // Exibe a modal
        modal.style.display = "block";
    });
});

// Quando o usuário clica no botão de fechar
closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

// Quando o usuário clica fora da modal, fecha a modal
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});