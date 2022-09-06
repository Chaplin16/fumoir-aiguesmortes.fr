const anim = document.getElementById('anim');

//ANIM IN THE SCROLL IN THE DISHES'S NAME
window.addEventListener("scroll", () => {
    if (window.scrollY > 750 && window.scrollX < 600) {
      anim.classList.add("nameDish");  
    } 
    else if (window.scrollY > 600 && window.scrollX > 600) {
        anim.classList.add("nameDish");  
    }  
    else{
        anim.classList.remove("nameDish"); 
    }
  }); 