export function Tabs() {
  const tabs = document.querySelectorAll("[data-tab]");
  const tabContents = document.querySelectorAll(".tab-content");

  // فقط اگر تب‌ها وجود دارند اجرا شود
  if (!tabs.length || !tabContents.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.tab;

      // حذف کلاس active از همه تب‌ها
      tabs.forEach((t) => t.classList.remove("active"));
      // افزودن کلاس active به تب کلیک شده
      tab.classList.add("active");

      // مخفی کردن همه محتواها
      tabContents.forEach((tc) => tc.classList.remove("active"));
      // نمایش محتوای مرتبط با تب کلیک شده
      document.getElementById(target).classList.add("active");
    });
  });
}
