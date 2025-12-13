export function Accordion() {
  const accordionButtons = document.querySelectorAll(".accordion-button");

  if (!accordionButtons.length) return;

  accordionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-accordion-target");
      const content = document.querySelector(
        `[data-accordion-content="${targetId}"]`
      );
      const icon = button.querySelector(".accordion-icon");
      const isExpanded = button.getAttribute("aria-expanded") === "true";

      if (!content) return;

      // Toggle aria-expanded
      button.setAttribute("aria-expanded", !isExpanded);

      // Toggle grid-template-rows for animation
      if (isExpanded) {
        // Close
        content.style.gridTemplateRows = "0fr";
        icon.style.transform = "rotate(0deg)";
      } else {
        // Open
        content.style.gridTemplateRows = "1fr";
        icon.style.transform = "rotate(180deg)";
      }
    });
  });
}
