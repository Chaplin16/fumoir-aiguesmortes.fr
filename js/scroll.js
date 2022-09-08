const anim = document.getElementById('anim');

//ANIM IN THE SCROLL IN THE DISHES'S NAME
window.addEventListener("scroll", () => {
    if (window.scrollY > 900 && window.scrollX < 600) {
      anim.classList.add("nameDish");  
    } 
    else if (window.scrollY > 700 && window.scrollX > 600) {
        anim.classList.add("nameDish");  
    }  
    else{
        anim.classList.remove("nameDish"); 
    }
  }); 