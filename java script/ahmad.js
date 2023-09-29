// Toggle the .pa-fixed-header class when the user 
// scroll 100px 

window.onscroll = () => {scrollNavbar()};

scrollNavbar = () => {
    // Target elements
    const navBar = document.getElementById("navBar");
    const links = document.querySelectorAll("#navBar a");

  if (document.documentElement.scrollTop > 100) {
    navBar.classList.add("pa-fixed-header");

    // Change the color of links on scroll
    for (let i = 0; i < links.length; i++) {
        const element = links[i];
        element.classList.add('text-black');
    }

  } else {
    navBar.classList.remove("pa-fixed-header");
    
    // Change the color of links back to default
    for (let i = 0; i < links.length; i++) {
        const element = links[i];
        element.classList.remove('text-black');
    }
  }
}



var Gallery = (function() {
  var colors = ['#34495E', '#2E4053', '#283747', '#212F3C', '#1B2631', '#2C3E50', '#273746'];
  var scrollTimeId;
  var posLeft = 0;

  function Gallery(config) {
      this.list = $(config.list);
      this.items = this.list.find('li');
      this.itemWidth = this.items.outerWidth();
  };

  Gallery.prototype = {
      constructor: Gallery,

      init: function() {
          this.setGalleryWidth();
          this.setItemsColor();
          this.eventManager();

          return this;
      },

      eventManager: function() {
          var _this = this;

          $("html, body").on('mousewheel', function(event) {
              clearTimeout(scrollTimeId);
              scrollTimeId = setTimeout(onScrollEventHandler.bind(this, event, _this.itemWidth), 0);
          });
      },

      getRandomColor: function() {
          return colors[Math.floor(Math.random() * colors.length)];
      },

      setItemsColor: function() {
          var _this = this;

          $.each(this.items, function(index, item) {
               item.style.backgroundColor = _this.getRandomColor();
          });
      },

      setGalleryWidth: function() {
          this.list.css('width', this.getGalleryWidth());
      },

      getGalleryWidth: function() {
          var width = 0;

          this.items.each(function(index, item) {
              width += $(this).outerWidth();
          });

          return width;
      }
  };

  function onScrollEventHandler(event, width) {
    if (event.deltaY > 0) {
      this.scrollLeft -= width / 2;
    } else {
      this.scrollLeft += width / 2;
    }

      // Firefox, please, stop it
       // if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
       //    if (event.originalEvent.detail > 0) {
       //        posLeft += width / 2;
       //        $('html').scrollLeft(posLeft);
       //    } else {
       //        posLeft -= width / 2;
       //        $('html').scrollLeft(posLeft);
       //    }
       // } else {
       //    if (event.originalEvent.wheelDelta > 0)  {
       //        this.body.scrollLeft -= width / 2;
       //    } else {
       //        this.body.scrollLeft += width / 2;
       //    }
       // }
      event.preventDefault();
  };

  return Gallery;
})();





// Function to handle image click
function handleImageClick(image) {
  const popupImage = document.querySelector(".popup-image");
  const popupImageElement = document.querySelector(".popup-image img");

  popupImage.style.display = "block";
  popupImageElement.src = image.getAttribute("src");
}

// Function to handle close button click
function handleCloseClick() {
  document.querySelector(".popup-image").style.display = "none";
}

// Attach event listeners
document.querySelectorAll(".image-container img").forEach(image => {
  image.addEventListener("click", () => handleImageClick(image));
});

document.querySelector(".popup-image span").addEventListener("click", handleCloseClick);

// Media query for responsiveness
const mediaQuery = window.matchMedia("(max-width: 768px)");

function handleMediaQueryChange(mediaQuery) {
  if (mediaQuery.matches) {
    // Apply mobile styles
    // You can add specific styles or adjustments for smaller screens here
  } else {
    // Apply styles for screens larger than 768px
    // You can add specific styles or adjustments for larger screens here
  }
}

// Initial check for the media query
handleMediaQueryChange(mediaQuery);

// Add listener for changes in the media query
mediaQuery.addListener(handleMediaQueryChange);

Footer



const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');

  links.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    }
  });

  burger.classList.toggle('toggle');
});

const burger = document.querySelector('.burger');
burger.addEventListener('click', function() {
  burger.classList.toggle('active');
});

