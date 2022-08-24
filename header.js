//2 IMAGES IN THE HEADER APPEAR FROM 900PX WIDTH
const img = document.querySelectorAll(".imgHeader");

const header = () => {
  img.forEach(img => {
    img.style.display = window.innerWidth < 1100 ? "none" : "block";
  })
}

window.addEventListener("resize", header);