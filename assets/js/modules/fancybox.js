export default function fancybox() {
  // بررسی وجود گالری
  const gallery = document.getElementById("product-gallery");
  if (!gallery) return;

  // بررسی وجود Fancybox (از فایل UMD که در header لود شده)
  if (typeof window.Fancybox === 'undefined') {
    console.warn('Fancybox is not loaded');
    return;
  }

  // تنظیمات Fancybox
  window.Fancybox.bind("[data-fancybox='gallery']", {
    // تنظیمات UI
    Toolbar: {
      display: {
        left: ["infobar"],
        middle: [],
        right: ["zoom", "slideshow", "thumbs", "close"],
      },
    },

    // تنظیمات Thumbs
    Thumbs: {
      type: "classic",
      autoStart: false,
    },

    // تنظیمات تصویر - مهم!
    Images: {
      zoom: true,
      Panzoom: {
        maxScale: 3,
        // تنظیمات برای fit کردن تصویر در صفحه
        contain: "outside",
        // غیرفعال کردن زوم اولیه
        click: "toggleZoom",
      },
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

    // تنظیم اندازه اولیه
    defaultType: "image",
    defaultDisplay: "flex",

    // Preload
    preload: 1,
  });

  // رویداد کلیک برای تصویر اصلی
  const mainImage = document.getElementById("main-image-container");
  if (mainImage) {
    mainImage.addEventListener("click", function (e) {
      if (
        e.target.closest("#gallery-prev") ||
        e.target.closest("#gallery-next")
      ) {
        return;
      }

      const firstLink = document.querySelector('[data-fancybox="gallery"]');
      if (firstLink) {
        firstLink.click();
      }
    });
  }
}
