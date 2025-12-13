export default function travelGalleryFancybox() {
  // بررسی وجود گالری سفر
  const travelGallery = document.querySelector(".travel-gallery");
  if (!travelGallery) return;

  // بررسی وجود Fancybox (از فایل UMD که در header لود شده)
  if (typeof window.Fancybox === "undefined") {
    console.warn("Fancybox is not loaded");
    return;
  }

  // تنظیمات Fancybox برای گالری سفر
  window.Fancybox.bind("[data-fancybox='travel-gallery']", {
    // تنظیمات UI
    Toolbar: {
      display: {
        left: ["infobar"],
        middle: [],
        right: ["slideshow", "thumbs", "close"],
      },
    },

    // تنظیمات Thumbs
    Thumbs: {
      type: "classic",
      autoStart: false,
    },

    // تنظیمات تصویر
    Images: {
      zoom: true,
      Panzoom: {
        maxScale: 3,
        contain: "outside",
        click: "toggleZoom",
      },
    },

    // تنظیمات ویدیو
    Video: {
      tpl:
        '<video class="fancybox__html5video" playsinline controls controlsList="nodownload"{{#poster}} poster="{{poster}}"{{/poster}}>' +
        '<source src="{{src}}" type="{{format}}" />' +
        "Sorry, your browser doesn't support embedded videos.</video>",
      format: "",
      autoplay: true,
      ratio: 16 / 9,
    },

    // انیمیشن
    animated: true,
    showClass: "f-fadeIn",
    hideClass: "f-fadeOut",

    // تنظیمات اسلاید
    infinite: true,
    dragToClose: true,

    // تنظیمات کیبورد
    keyboard: {
      Escape: "close",
      Delete: "close",
      Backspace: "close",
      PageUp: "next",
      PageDown: "prev",
      ArrowUp: "prev",
      ArrowDown: "next",
      ArrowRight: "next",
      ArrowLeft: "prev",
    },

    // تنظیمات ظاهری
    backdropClick: "close",

    // Carousel settings
    Carousel: {
      transition: "slide",
      friction: 0.9,
    },

    // Preload
    preload: 1,

    // تنظیمات layout
    defaultType: "image",
    defaultDisplay: "flex",
    placeFocusBack: true,

    // Pause video when closing or changing slide
    on: {
      init: (fancybox) => {
        // Pause all videos in swiper before opening fancybox
        const mainSlider = document.querySelector("#travel-main-slider");
        if (mainSlider) {
          const slides = mainSlider.querySelectorAll("swiper-slide");
          slides.forEach((slide) => {
            const video = slide.querySelector("video");
            if (video && !video.paused) {
              video.pause();
              video.removeAttribute("controls");
              
              // Show overlay and cover again
              const overlay = slide.querySelector(".video-play-overlay");
              const cover = slide.querySelector(".video-cover");
              if (overlay) {
                overlay.style.display = "flex";
              }
              if (cover) {
                cover.style.display = "block";
              }
            }
          });
        }
      },
      reveal: (fancybox, slide) => {
        // Pause all videos first
        const allVideos = document.querySelectorAll(".fancybox__html5video");
        allVideos.forEach((video) => {
          video.pause();
        });
      },
      "Carousel.change": (fancybox, carousel, prevIndex, nextIndex) => {
        // Pause all videos when changing slides
        const allVideos = document.querySelectorAll(".fancybox__html5video");
        allVideos.forEach((video) => {
          video.pause();
        });
      },
      closing: (fancybox) => {
        // Pause all videos when closing fancybox
        const allVideos = document.querySelectorAll(".fancybox__html5video");
        allVideos.forEach((video) => {
          video.pause();
        });
      },
    },
  });
}
