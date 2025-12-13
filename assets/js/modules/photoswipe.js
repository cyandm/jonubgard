import PhotoSwipeLightbox from "photoswipe/lightbox";
import PhotoSwipe from "photoswipe";
import "photoswipe/style.css";

export default function photoswipe() {
  // بررسی وجود گالری
  const gallery = document.getElementById("product-gallery");
  if (!gallery) return;

  const lightbox = new PhotoSwipeLightbox({
    gallery: "#product-gallery",
    children: "a",
    pswpModule: PhotoSwipe,

    // تنظیمات پایه
    bgOpacity: 0.95,
    spacing: 0.1,

    // فعال سازی UI
    zoom: true,
    close: true,
    counter: true,
    arrowKeys: true,

    // تنظیمات زوم
    maxZoomLevel: 4,
    initialZoomLevel: "fit",
    secondaryZoomLevel: 2,

    // انیمیشن
    showHideAnimationType: "zoom",

    // Padding
    padding: { top: 50, bottom: 50, left: 20, right: 20 },
  });

  // اضافه کردن دکمه دانلود
  lightbox.on("uiRegister", function () {
    lightbox.pswp.ui.registerElement({
      name: "download-button",
      order: 8,
      isButton: true,
      tagName: "a",
      html: '<svg aria-hidden="true" class="pswp__icn" viewBox="0 0 32 32" width="32" height="32"><use class="pswp__icn-shadow" xlink:href="#pswp__icn-download"/><path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1ZM23 23H9v2h14Z" id="pswp__icn-download"/></svg>',
      onInit: (el, pswp) => {
        el.setAttribute("download", "");
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener");
        el.setAttribute("title", "Download");

        pswp.on("change", () => {
          if (pswp.currSlide && pswp.currSlide.data) {
            el.href = pswp.currSlide.data.src;
          }
        });
      },
    });
  });

  lightbox.init();

  // اضافه کردن رویداد کلیک به تصویر اصلی
  const mainImage = document.getElementById("main-image-container");
  if (mainImage) {
    mainImage.addEventListener("click", function (e) {
      // جلوگیری از باز شدن مجدد اگر روی دکمه ها کلیک شد
      if (
        e.target.closest("#gallery-prev") ||
        e.target.closest("#gallery-next")
      ) {
        return;
      }

      const firstLink = document.querySelector(
        "#product-gallery a:not(.hidden)"
      );
      if (firstLink) {
        firstLink.click();
      }
    });
  }
}
