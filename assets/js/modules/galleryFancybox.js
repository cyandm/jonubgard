/**
 * Gallery Fancybox Module
 * Initializes Fancybox for gallery cards and leader images
 * Supports both gallery-{id} and leader-{id} data-fancybox groups
 */
export default function galleryFancybox() {
  // Check if Fancybox is loaded
  if (typeof window.Fancybox === "undefined") {
    console.warn("Fancybox is not loaded");
    return;
  }

  // Fancybox settings for gallery cards
  // Works with all data-fancybox attributes starting with 'gallery-'
  window.Fancybox.bind("[data-fancybox^='gallery-']", {
    // UI settings
    Toolbar: {
      display: {
        left: ["infobar"],
        middle: [],
        right: ["slideshow", "thumbs", "close"],
      },
    },

    // Thumbnails settings
    Thumbs: {
      type: "classic",
      autoStart: false,
    },

    // Image settings
    Images: {
      zoom: true,
      Panzoom: {
        maxScale: 3,
        contain: "outside",
        click: "toggleZoom",
      },
    },

    // Animation
    animated: true,
    showClass: "f-fadeIn",
    hideClass: "f-fadeOut",

    // Slide settings
    infinite: true,
    dragToClose: true,

    // Keyboard shortcuts
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

    // Appearance settings
    backdropClick: "close",

    // Carousel settings
    Carousel: {
      transition: "slide",
      friction: 0.9,
    },

    // Preload
    preload: 1,

    // Layout settings
    defaultType: "image",
    defaultDisplay: "flex",
    placeFocusBack: true,
  });

  // Fancybox settings for leader images (same settings as gallery)
  window.Fancybox.bind("[data-fancybox^='leader-']", {
    // UI settings
    Toolbar: {
      display: {
        left: ["infobar"],
        middle: [],
        right: ["slideshow", "thumbs", "close"],
      },
    },

    // Thumbnails settings
    Thumbs: {
      type: "classic",
      autoStart: false,
    },

    // Image settings
    Images: {
      zoom: true,
      Panzoom: {
        maxScale: 3,
        contain: "outside",
        click: "toggleZoom",
      },
    },

    // Animation
    animated: true,
    showClass: "f-fadeIn",
    hideClass: "f-fadeOut",

    // Slide settings
    infinite: true,
    dragToClose: true,

    // Keyboard shortcuts
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

    // Appearance settings
    backdropClick: "close",

    // Carousel settings
    Carousel: {
      transition: "slide",
      friction: 0.9,
    },

    // Preload
    preload: 1,

    // Layout settings
    defaultType: "image",
    defaultDisplay: "flex",
    placeFocusBack: true,
  });
}
