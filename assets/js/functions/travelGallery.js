/**
 * Travel Gallery - Sync main slider with thumbnails and pause videos
 */

export function TravelGallery() {
  // Find main slider and thumbnails
  const mainSlider = document.querySelector("#travel-main-slider");
  const thumbnails = document.querySelectorAll(
    ".thumbnail-item, .thumbnail-more"
  );

  if (!mainSlider || thumbnails.length === 0) {
    return;
  }

  // Function to scroll active thumbnail into view (for mobile)
  const scrollActiveThumbnailIntoView = (activeIndex) => {
    // Find the thumbnails container
    const thumbnailsContainer = document.querySelector("#travel-thumbnails");
    if (!thumbnailsContainer) return;

    // Check if we're on mobile (container has flex class and overflow-x-auto)
    const isMobile = window.innerWidth < 1024; // lg breakpoint
    if (!isMobile) return;

    // Find the active thumbnail
    let activeThumbnail = null;

    thumbnails.forEach((thumb, index) => {
      // If activeIndex is in first 8 items, find that thumbnail
      if (activeIndex < 8 && index === activeIndex) {
        activeThumbnail = thumb;
      }
      // If activeIndex is 8 or more, find the "+X" button (index 8)
      else if (activeIndex >= 8 && index === 8) {
        activeThumbnail = thumb;
      }
    });

    // Scroll the active thumbnail into view
    if (activeThumbnail) {
      // Use scrollIntoView with smooth behavior and center alignment
      activeThumbnail.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  // Function to update active thumbnail
  const updateActiveThumbnail = (activeIndex) => {
    thumbnails.forEach((thumb, index) => {
      // Remove all active states first
      thumb.classList.remove("active");
      thumb.classList.remove("ring-2", "ring-cynOrange");

      // If activeIndex is in first 8 items, highlight that thumbnail
      if (activeIndex < 8 && index === activeIndex) {
        thumb.classList.add("active");
        thumb.classList.add("ring-2", "ring-cynOrange");
      }
      // If activeIndex is 8 or more, highlight the "+X" button (index 8)
      else if (activeIndex >= 8 && index === 8) {
        thumb.classList.add("active");
        thumb.classList.add("ring-2", "ring-cynOrange");
      }
    });

    // Scroll active thumbnail into view on mobile
    scrollActiveThumbnailIntoView(activeIndex);
  };

  // Function to pause all videos except the active slide
  const pauseAllVideosExceptActive = () => {
    const slides = mainSlider.querySelectorAll("swiper-slide");
    const swiper = mainSlider.swiper;
    let activeIndex = 0;

    if (swiper) {
      activeIndex = swiper.activeIndex;
    } else {
      slides.forEach((slide, index) => {
        if (
          slide.classList.contains("swiper-slide-active") ||
          slide.hasAttribute("active")
        ) {
          activeIndex = index;
        }
      });
    }

    slides.forEach((slide, index) => {
      const video = slide.querySelector("video");
      const overlay = slide.querySelector(".video-play-overlay");
      const cover = slide.querySelector(".video-cover");

      if (video) {
        if (index === activeIndex) {
          // Don't pause the active slide's video
        } else {
          // Pause video
          video.pause();
          video.removeAttribute("controls");

          // Show overlay and cover again
          if (overlay) {
            overlay.style.display = "flex";
          }
          if (cover) {
            cover.style.display = "block";
          }
        }
      }
    });
  };

  // Wait for swiper to be initialized
  const initSwiper = () => {
    const swiper = mainSlider.swiper;

    if (!swiper) {
      setTimeout(initSwiper, 100);
      return;
    }

    // Handle slide change
    const handleSlideChange = () => {
      const activeIndex = swiper.activeIndex;
      updateActiveThumbnail(activeIndex);
      pauseAllVideosExceptActive();
    };

    // Listen to slide change events
    swiper.on("slideChange", handleSlideChange);
    mainSlider.addEventListener("swiperslidechange", handleSlideChange);

    // Initialize on load
    updateActiveThumbnail(swiper.activeIndex);
    pauseAllVideosExceptActive();

    // Add click handlers to thumbnails
    thumbnails.forEach((thumb, index) => {
      thumb.addEventListener("click", (e) => {
        // Prevent fancybox from opening when clicking thumbnails
        // Only change swiper slide
        e.preventDefault();
        e.stopPropagation();

        const slideIndex = index === 8 ? 8 : index;
        swiper.slideTo(slideIndex);
      });
    });
  };

  // Handle video play button clicks
  const initVideoPlayButtons = () => {
    const playOverlays = mainSlider.querySelectorAll(".video-play-overlay");

    playOverlays.forEach((overlay) => {
      overlay.addEventListener("click", function (e) {
        // Stop propagation to prevent fancybox from opening
        e.stopPropagation();
        e.preventDefault();

        const slide = this.closest("swiper-slide");
        const video = slide.querySelector("video");
        const cover = slide.querySelector(".video-cover");

        if (video) {
          // Play video
          video.play().catch((error) => {
            console.error("Error playing video:", error);
          });

          // Hide cover and overlay
          if (cover) {
            cover.style.display = "none";
          }
          this.style.display = "none";

          // Show controls after play
          video.setAttribute("controls", "true");
        }
      });
    });

    // Handle video events (pause, ended) to show overlay again
    const videos = mainSlider.querySelectorAll("video");
    videos.forEach((video) => {
      const slide = video.closest("swiper-slide");
      const overlay = slide?.querySelector(".video-play-overlay");
      const cover = slide?.querySelector(".video-cover");

      video.addEventListener("pause", () => {
        // Only show overlay if video is not at the end
        if (video.currentTime < video.duration - 0.5) {
          if (overlay) {
            overlay.style.display = "flex";
          }
          if (cover) {
            cover.style.display = "block";
          }
          video.removeAttribute("controls");
        }
      });

      video.addEventListener("ended", () => {
        // Show overlay when video ends
        if (overlay) {
          overlay.style.display = "flex";
        }
        if (cover) {
          cover.style.display = "block";
        }
        video.removeAttribute("controls");
        video.currentTime = 0; // Reset to beginning
      });
    });
  };

  // Pause videos when clicking fancybox links
  const initFancyboxClickHandlers = () => {
    const fancyboxLinks = mainSlider.querySelectorAll(
      "a[data-fancybox='travel-gallery']"
    );

    fancyboxLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        // Find the video in the same slide
        const slide = link.closest("swiper-slide");
        if (slide) {
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
        }
      });
    });
  };

  // Start initialization
  initSwiper();
  initVideoPlayButtons();
  initFancyboxClickHandlers();

  // Also initialize on load (in case swiper is already initialized)
  setTimeout(() => {
    const swiper = mainSlider.swiper;
    if (swiper) {
      updateActiveThumbnail(swiper.activeIndex);
      pauseAllVideosExceptActive();
    }
    initVideoPlayButtons();
    initFancyboxClickHandlers();
  }, 500);
}
