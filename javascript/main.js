var container = document.querySelector('.row-container');
var movie = '';

for (var i = 0; i < data.films.length; i++) {
  movie += "<div class=\"miniature-container\"><img class=\"miniature\" src=" + data.films[i].img + "></div>";
}
container.innerHTML = movie;

var imgContainer = document.querySelectorAll('.miniature-container');

for (var i = 0; i < data.films.length; i++)
switch (data.films[i].category) {
    case 'Action':
      imgContainer[i].classList.add('action');
    break;
    case 'Animation':
      imgContainer[i].classList.add('anim');
      break;
    case 'Comedy':
      imgContainer[i].classList.add('comedy');
      break;
    case 'Horror / Thriller':
      imgContainer[i].classList.add('horror');
      break;
  }

var img = document.querySelectorAll('.miniature');
var modal = document.querySelector('.modal');
var imgModal = document.querySelector('.img-modal-container');
var title = document.querySelector('.title');
var duration = document.querySelector('.duration');
var date = document.querySelector('.date');
var description = document.querySelector('.description');
var titleYear = document.querySelector('.title-year');
var noteGlobal = document.querySelector('.global-note');
var videoSrc = document.querySelector('.video-src');
var modalplay = document.querySelector('.modalvideo');
var modalplayercontent = document.querySelector('.modalvideo-overlay');
var src;
var sliderContainer = document.querySelector('.slider-container');

videoSrc.addEventListener('click', function(event) {
  event.preventDefault();
  modal.style.display = ''; // empty string = return to default state
  playerContainer.style.display = 'block';
  sliderContainer.style.display = 'none';
  video.src = src;
});

for (let i = 0; i < img.length; i++) {
  img[i].addEventListener('click', function(event) {
    imgModal.innerHTML = "<img class=\"img-modal\" src=" + data.films[i].img + ">";
    title.innerHTML = data.films[i].title;
    duration.innerHTML = "Durée: " + data.films[i].duration + "min";
    date.innerHTML = "Année de sortie: " + data.films[i].year;
    description.innerHTML = "Description :" + data.films[i].description;
    titleYear.innerHTML = "<p class=\"title\">" + data.films[i].title + "</p>" + "<p class=\"year\">"+"(" + data.films[i].year + ")" + "</p>";
    noteGlobal.innerHTML = " ";
    for (var j = 0; j < data.films[i].rating; j++) {
      noteGlobal.innerHTML += " * ";
    }
    modal.style.display = 'block';
    sliderContainer.style.display = 'none';
    // videoSrc.href ='videos/' + data.films[i].src;
    src = 'videos/' + data.films[i].src;
  });
}

var descriptionPart = document.querySelector('.description-part');
var reviewsPart = document.querySelector('.reviews-part');
var descriptionModal = document.querySelector('.description-modal-container');
var reviewsModal = document.querySelector('.reviews-modal-container');

descriptionPart.addEventListener('click', function(event) {
  reviewsModal.style.display = 'none';
  descriptionModal.style.display = 'block';
})

reviewsPart.addEventListener('click', function(event) {
  descriptionModal.style.display = 'none';
  reviewsModal.style.display = 'block';
})

var closeButtonModal = document.querySelector('.close-button-modal');

closeButtonModal.addEventListener('click', function(event) {
  modal.style.display = '';
  sliderContainer.style.display = '';
})

var closeButtonVideo = document.querySelector('.close-button-video');

closeButtonVideo.addEventListener('click', function(event) {
  playerContainer.style.display = '';
  sliderContainer.style.display = '';
})

var navCategories = document.querySelector('.nav-categories');
var navHome = document.querySelector('.nav-home');
var homePrez = document.querySelector('.movies-presentation');
var categoriesPrez = document.querySelector('.categories-presentation');
var allTag = document.querySelector('.all-tag');
var tagMovies = document.querySelector('.tag-movies');
var tagCategories = document.querySelector('.tag-categories');
var categoryTagList = document.querySelector('.category-tag-list');

navCategories.addEventListener('click', function(event) {
  tagMovies.style.display = 'none';
  categoryTagList.style.display = 'flex';
  playerContainer.style.display = '';
  sliderContainer.style.display = '';
  modal.style.display = '';
})

navHome.addEventListener('click', function(event) {
  tagMovies.style.display = 'block';
  categoryTagList.style.display = 'none';
  for (var i = 0; i < imgContainer.length; i++) {
     imgContainer[i].style.display = '';
    }
  playerContainer.style.display = '';
  sliderContainer.style.display = '';
  modal.style.display = '';
})

tagCategories.addEventListener('click', function(event) {
  for (var i = 0; i < imgContainer.length; i++) {
     imgContainer[i].style.display = '';
    }
})

var actionTag = document.querySelector('.action-tag');
var animTag = document.querySelector('.anim-tag');
var comedyTag = document.querySelector('.comedy-tag');
var horrorTag = document.querySelector('.horror-tag');
var allTag = document.querySelector('.all-tag');

actionTag.addEventListener('click', function(event) {
  for (var i = 0; i < imgContainer.length; i++) {
    if(imgContainer[i].classList.contains('action')) {
     imgContainer[i].style.display = '';
    } else {
      imgContainer[i].style.display = 'none'
    }
  }
})

animTag.addEventListener('click', function(event) {
  for (var i = 0; i < imgContainer.length; i++) {
    if(imgContainer[i].classList.contains('anim')) {
     imgContainer[i].style.display = '';
    } else {
      imgContainer[i].style.display = 'none'
    }
  }
})

comedyTag.addEventListener('click', function(event) {
  for (var i = 0; i < imgContainer.length; i++) {
    if(imgContainer[i].classList.contains('comedy')) {
     imgContainer[i].style.display = '';
    } else {
      imgContainer[i].style.display = 'none'
    }
  }
})

horrorTag.addEventListener('click', function(event) {
  for (var i = 0; i < imgContainer.length; i++) {
    if(imgContainer[i].classList.contains('horror')) {
     imgContainer[i].style.display = '';
    } else {
      imgContainer[i].style.display = 'none'
    }
  }
})

allTag.addEventListener('click', function(event) {
  for (var i = 0; i < imgContainer.length; i++) {
     imgContainer[i].style.display = '';
  }
})

/*SLIDER*/
var slides = document.querySelectorAll('.slider-container .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,3000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}
var playing = true;
var pauseButton = document.getElementById('pause');

function pauseSlideshow() {
    pauseButton.innerHTML = 'Play';
    playing = false;
    clearInterval(slideInterval);
}

function playSlideshow() {
    pauseButton.innerHTML = 'Pause';
    playing = true;
    slideInterval = setInterval(nextSlide,2000);
}

pauseButton.onclick = function() {
    if(playing) {
    pauseSlideshow();
  } else {
    playSlideshow();
  }
};

/* END SLIDER */


// [].slice.call(titles).filter(x => x.innerHTML.startsWith('Na'))

// Home page
// var create = document.querySelector('.create-account');
// var signIn = document.querySelector('.sign-in');
// var log = document.querySelector('.log');
//
// create.addEventListener('click', function(event) {
//   signIn.style.display= 'block';
//   signUp.style.display= '';
// })
//
// var logIn = document.querySelector('.login-account');
// var signUp = document.querySelector('.sign-up');
// var log = document.querySelector('.log');
//
// logIn.addEventListener('click', function(event) {
//   signUp.style.display= 'block';
//   signIn.style.display= '';
// })*/
