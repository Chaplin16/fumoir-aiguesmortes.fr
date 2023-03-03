
function carousel(selector, data) {
    let element = document.querySelector(selector);
    data.forEach(function(d) {
        element.innerHTML += 
        `<div class="card-img"><img src="${d.photo}" alt="${d.alt}"></div>`;
    });
    $(element).slick({
        centerMode: false,
        slidesToScroll: 1,
        slidesToShow: 5,
        adaptiveHeight: true,
        centerPadding: '7px',
        speed:1500,
        autoplay:true,
        autoplaySpeed:1200,
        arrows: true,
        infinite: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        swipeToSlide: true,
        responsive: [{
                breakpoint: 1850,
                settings: {
                    slidesToShow: 4
                }
           },
            {
                breakpoint: 1450,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 968,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1
                }
             }
         ]
    });
  }
  
  carousel(".carousel", dishes);
