export function SearchPage() {
  const searchForm = document.querySelector("form#search-form");

  if (!searchForm) return;

  searchForm.querySelectorAll("input")?.forEach((el) => {
    el.addEventListener("change", () => {
      searchForm.submit();
    });
  });
}
