const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const captionText = document.getElementById("caption");
const gallery = document.getElementById("gallery");
const closeBtn = document.querySelector(".close-btn");

gallery.addEventListener('click', (e) => {
    if (e.target.classList.contains('thumb')) {
        openModal(e.target);
    }
});

function openModal(img) {
    modal.style.display = "flex";
    modalImg.src = img.src; 
    captionText.innerHTML = img.alt;
    document.body.style.overflow = "hidden";
}

function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

closeBtn.onclick = closeModal;

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") closeModal();
});

modal.onclick = (e) => {
    if (e.target === modal) closeModal();
};