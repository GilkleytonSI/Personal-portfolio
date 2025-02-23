var typed=new Typed(".input",{
    strings:["Frontend Developer","Web Developer","FullStack Developer"],
    typedSpeed:70,
    backSpeed:55,
    loop:true
});

document.addEventListener("DOMContentLoaded", function () {
    const btnTopo = document.getElementById("btn-topo");

    // Mostrar botão ao rolar a página
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) { // Aparece após 300px rolados
            btnTopo.style.display = "block";
        } else {
            btnTopo.style.display = "none";
        }
    });

    // Rolar suavemente para o topo
    btnTopo.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

    
