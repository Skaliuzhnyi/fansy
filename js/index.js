const page = document.querySelector('.main');
const body = document.querySelector('body');

/////////////////////////////////////////////////////////////////

let schedule = page.querySelector('.schedule');

if (schedule) {
  let scheduleList = page.querySelector('.schedule__list');
  let scheduleItems = Array.from(scheduleList.querySelectorAll('.schedule__item'));

  scheduleList.addEventListener('click', (event) => {
    for (let item of scheduleItems) {
      $(item).removeClass('selected');
    };

    let target = event.target.closest('li');
    $(target).addClass('selected');
});
}


/////////////////////////////////////////////////////////////////

let pageContainsRellax = page.querySelector('.rellax');

if (pageContainsRellax) {
  var rellax = new Rellax('.rellax', {});
}

/////////////////////////////////////////////////////////////////


let titleLine = '<svg class="svg__anim" width="147" height="7" viewBox="0 0 147 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 6C80.4279 5.99996 153.861 -3.23304 145.322 3.39448" stroke="#5D95CF" stroke-width="2" stroke-linecap="round" /></svg>';

let pageTitle = page.querySelector('.page__title');

if (pageTitle) {
  pageTitle.insertAdjacentHTML('beforeend', titleLine);
}

/////////////////////////////////////////////////////////////////

//додаєом стрілку вправо до btn

let btnArrow = page.querySelector('.btn');
let arrow = '<span><svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill - rule = "evenodd" clip - rule = "evenodd" d = "M6.77856 0.454795C6.97828 0.264087 7.29478 0.271388 7.48548 0.471101L10.8553 4.00008L7.48548 7.52906C7.29478 7.72877 6.97828 7.73607 6.77856 7.54537C6.57885 7.35466 6.57155 7.03816 6.76226 6.83845L8.99518 4.50008H1.34766C1.07151 4.50008 0.847656 4.27622 0.847656 4.00008C0.847656 3.72394 1.07151 3.50008 1.34766 3.50008H8.99518L6.76226 1.16171C6.57155 0.962 6.57885 0.645502 6.77856 0.454795Z" fill = "#5D95CF" / ></svg></span>';

if (btnArrow) {
  let btnArr = Array.from(document.querySelectorAll('.btn'));

  for (let item of btnArr) {
    item.insertAdjacentHTML('beforeend', arrow);
  }
}

let coursesLinks = page.querySelector('.courses__links-icon');

if (coursesLinks) {
  let linkIcon = Array.from(document.querySelectorAll('.courses__links-icon'));

  for (let item of linkIcon) {
    item.insertAdjacentHTML('beforeend', arrow);
  }
}

let becomeReg = page.querySelector('.become__reg-icon');

if (becomeReg) {
  let linkIcon = document.querySelector('.become__reg-icon');

  linkIcon.insertAdjacentHTML('beforeend', arrow);
}

let file = page.querySelector('.become__files');

if (file) {
  let linkIcon = Array.from(document.querySelectorAll('.become__files-title'));

  for (let item of linkIcon) {
    item.insertAdjacentHTML('beforeend', arrow);
  }
}

/////////////////////////////////////////////////////////////////

//додаєом стрілку вправо до pagination

let pagination = page.querySelector('.pagination');

if (pagination) {
  let arrows = Array.from(document.querySelectorAll('.icon'));
  let arrow = '<svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill - rule = "evenodd" clip - rule = "evenodd" d = "M4.71967 9.7908C5.01257 10.0697 5.48744 10.0697 5.78033 9.7908C6.07322 9.51187 6.07322 9.05959 5.78033 8.78066L1.81066 5.00001L5.78033 1.21937C6.07322 0.940416 6.07322 0.488156 5.78033 0.20921C5.48744 -0.0697366 5.01257 -0.0697366 4.71967 0.20921L0.21967 4.49493C-0.0732233 4.77388 -0.0732233 5.22614 0.21967 5.50509L4.71967 9.7908Z" fill = "black" / ></svg>';


  for (let item of arrows) {
    item.insertAdjacentHTML('beforeend', arrow);
  }
}

/////////////////////////////////////////////////////////////////

$('.slider__list').slick({
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  speed: 2000,
  fade: true,
  slidesToShow: 1,
  adaptiveHeight: true
});

/////////////////////////////////////////////////////////////////

//header при скролі

let header = document.querySelector('.header');

$(window).on("scroll", function () {
  if ($(window).scrollTop() > 25) {
    $(header).addClass("scroll");
  } else {
    $(header).removeClass("scroll");
  }
});

/////////////////////////////////////////////////////////////////

let headerMain = document.querySelector('.header__main');

if (headerMain) {

  if (headerMain.classList.contains('color')) {
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 25) {
        $(headerMain).removeClass('color');
      } else {
        $(headerMain).addClass('color');
      }
    });
  }
}



/////////////////////////////////////////////////////////////////

//burger on click

const burgerBtn = document.querySelector('.header__burger');
const headerNav = document.querySelector('.burger');
const social = document.querySelector('.social');
const logo = document.querySelector('.header__logo');
const headerBurger = document.querySelector('.header');
const wrapper = document.querySelector('.wrapper');

burgerBtn.addEventListener('click', () => {
  let burgerBtnActive = burgerBtn.classList.contains('active');
  let mainPage = page.classList.contains('page__main');

  if (header.classList.contains('scroll')) {
    $(header).addClass("color");
  }


  if (!burgerBtnActive) {
    burgerBtn.classList.add('active');
    headerNav.classList.add('active');
    social.classList.add('active');
    logo.classList.add('active');
    body.classList.add('lock');
    headerBurger.classList.add('lock');
    wrapper.classList.add('lock');

    if (!mainPage) {
      $('.header').addClass('burger__color');
      $('.burger').addClass('color');
    }
  } else {
    $('.header').removeClass('burger__color');
    $('.burger').removeClass('color');
    if (window.scrollY > 0) {
      burgerBtn.classList.remove('active');
      headerNav.classList.remove('active');
      social.classList.remove('active');
      logo.classList.remove('active');
      body.classList.remove('lock');
      headerBurger.classList.remove('lock');
      wrapper.classList.remove('lock');
      $(header).removeClass("color");
      $(header).addClass('scroll');
    } else {
      burgerBtn.classList.remove('active');
      headerNav.classList.remove('active');
      social.classList.remove('active');
      logo.classList.remove('active');
      body.classList.remove('lock');
      headerBurger.classList.remove('lock');
      wrapper.classList.remove('lock');
    }
  }
});

/////////////////////////////////////////////////////////////////

// додаємо стрілки до menu-item-has-children в меню header

function menuItems() {
  const menuItemsWithChildren = Array.from(document.querySelectorAll('.header__menu > .menu-item-has-children'));
  const iconPlus = '<svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 1.08586C0.683417 0.695338 1.31658 0.695338 1.70711 1.08586L4 3.37876L6.29289 1.08586C6.68342 0.695338 7.31658 0.695338 7.70711 1.08586C8.09763 1.47639 8.09763 2.10955 7.70711 2.50008L4 6.20718L0.292893 2.50008C-0.0976311 2.10955 -0.0976311 1.47639 0.292893 1.08586Z"/></svg>';

  for (let menuItem of menuItemsWithChildren) {
    menuItem.querySelector('a').insertAdjacentHTML('beforeend', iconPlus);
  }
}

menuItems();

/////////////////////////////////////////////////////////////////


let stickParent = page.querySelector('.list__stick');

if (stickParent) {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 25 && $(window).width() > 1023) {
      $(stickParent).stick_in_parent();
    } else {}
  });
}


/////////////////////////////////////////////////////////////////


function contentOnPage() {
  const content = document.querySelector('.content');

  if (document.contains(content)) {
    animationPrepare();
  } else {
    return;
  }
}
contentOnPage();


function animationPrepare() {
  const mainArea = document.querySelector('.main');
  const content = document.querySelector('.content');
  const containsContent = mainArea.contains(content);

  if (containsContent) {
    const contentH1 = document.querySelector('.content > h1');
    const contentH2 = document.querySelector('.content > h2');
    const contentH3 = document.querySelector('.content > h3');
    const contentH4 = document.querySelector('.content > h4');
    if (content.classList.contains('content_title_animimation')) {
      $(contentH1).addClass('animation-prepare-slow');
      $(contentH2).addClass('animation-prepare-slow');
      $(contentH3).addClass('animation-prepare-slow');
      $(contentH4).addClass('animation-prepare-slow');
    }
  } else {}
}

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('showAnim');
    }
  });
}
let options = {
  threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);

let elements = document.querySelectorAll('.animation-prepare');
for (let elm of elements) {
  observer.observe(elm);
}

function onEntryFast(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('showAnim-fast');
    }
  });
}

let observerFast = new IntersectionObserver(onEntryFast, options);
let elementTitle = document.querySelectorAll('.animation-prepare-fast');
for (let elm of elementTitle) {
  observerFast.observe(elm);
}

/////////////////////////////////////////////////////////////////

if ($(window).width() > 1260) {
  var $grid = $('.masonry').imagesLoaded(function () {
    $grid.masonry({
      gutter: 10,
    });
  });
}

if ($(window).width() > 1920) {
  var $grid = $('.masonry').imagesLoaded(function () {
    $grid.masonry({
      gutter: 15,
    });
  });
}

/////////////////////////////////////////////////////////////////

let pageContainsMap = page.querySelector('.map');

function map() {
  if (pageContainsMap) {
    initMap();
  }
}

map();

function initMap() {

  var mapInit = document.getElementById('map');
  var lng = parseFloat(mapInit.getAttribute('data-lng'));
  var lat = parseFloat(mapInit.getAttribute('data-lat'));
  var zoom = parseFloat(mapInit.getAttribute('data-zoom'));
  var icon = mapInit.getAttribute('data-icon');

  var map = new google.maps.Map(mapInit, {
    center: {
      lat,
      lng
    },
    zoom: zoom,
  });

  map.setOptions({
    styles: [{
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#686868"
        }]
      },
      {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [{
          "color": "#fafcff"
        }]
      },
      {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "road",
        "elementType": "all",
        "stylers": [{
            "saturation": -100
          },
          {
            "lightness": 45
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [{
          "visibility": "simplified"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [{
          "lightness": "-22"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
            "saturation": "11"
          },
          {
            "lightness": "-51"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text",
        "stylers": [{
            "saturation": "3"
          },
          {
            "lightness": "-56"
          },
          {
            "weight": "2.20"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [{
          "lightness": "-52"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.stroke",
        "stylers": [{
          "weight": "6.13"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.icon",
        "stylers": [{
            "lightness": "-10"
          },
          {
            "gamma": "0.94"
          },
          {
            "weight": "1.24"
          },
          {
            "saturation": "-100"
          },
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
          "lightness": "-16"
        }]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [{
            "saturation": "-41"
          },
          {
            "lightness": "-41"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.stroke",
        "stylers": [{
          "weight": "5.46"
        }]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [{
            "weight": "0.72"
          },
          {
            "lightness": "-16"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [{
          "lightness": "-37"
        }]
      },
      {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "water",
        "elementType": "all",
        "stylers": [{
            "color": "#b7e4f4"
          },
          {
            "visibility": "on"
          }
        ]
      }
    ]
  });


  var marker = new google.maps.Marker({
    map: map,
    position: {
      lat,
      lng
    },
    icon: icon,
  });
}