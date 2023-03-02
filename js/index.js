
function carousel(selector, data) {
    let element = document.querySelector(selector);
    data.forEach(function(d) {
        element.innerHTML += 
        `<div class="card-img"><img src="${d.photo}" alt="${d.alt}"></div>`;
    });
    $(element).slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 4,
        arrows: true,
        speed:1300,
        adaptiveHeight: true,
        autoplaySpeed:1200,
        autoplay: true,
        responsive: [{
                breakpoint: 1150,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1 
                }
           },
            {
                breakpoint: 1000,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '0rem',
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 550,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 2
                }
             }
         ]
    });
  }
  
  carousel(".carousel", dishes);
