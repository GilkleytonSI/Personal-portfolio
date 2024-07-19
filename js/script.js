const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const images = document.querySelectorAll(".projeto img");
    const closeModal = document.getElementsByClassName("close")[0];

    images.forEach(img => {
        img.addEventListener("click", function() {
            modal.style.display = "block";
            modalImg.src = this.src;
        });
    });

    closeModal.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });



var typed=new Typed(".input",{
    strings:["Frontend Developer","Web Developer"],
    typedSpeed:70,
    backSpeed:55,
    loop:true
});

    
