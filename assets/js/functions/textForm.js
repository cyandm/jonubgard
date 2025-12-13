/**
 * TextForm - Handle file input label updates and image preview
 * Updates the label text when files are selected and shows image previews
 * Allows adding more images without replacing existing ones
 */
export function TextForm() {
  // Check if the script element exists (only run on pages that need it)
  const scriptElement = document.getElementById("travelogue_form");
  if (!scriptElement) {
    return;
  }

  document.addEventListener("DOMContentLoaded", function () {
    const fileInput = document.getElementById("images");
    const fileLabel = document.getElementById("file-label");
    const previewContainer = document.getElementById("image-preview-container");

    if (!fileInput || !fileLabel || !previewContainer) {
      return;
    }

    // Store selected files
    let selectedFiles = [];

    // Get translations from data attributes or use defaults
    const selectText = fileInput.dataset.selectText || "انتخاب عکس";
    const filesSelectedText =
      fileInput.dataset.filesSelectedText || "فایل انتخاب شده";

    // Function to update file input with all selected files
    function updateFileInput() {
      const dataTransfer = new DataTransfer();
      selectedFiles.forEach((file) => {
        dataTransfer.items.add(file);
      });
      fileInput.files = dataTransfer.files;
      updateLabel();
    }

    // Function to update label text
    function updateLabel() {
      if (selectedFiles.length === 0) {
        fileLabel.textContent = selectText;
      } else if (selectedFiles.length === 1) {
        fileLabel.textContent = selectedFiles[0].name;
      } else {
        fileLabel.textContent = selectedFiles.length + " " + filesSelectedText;
      }
    }

    // Function to create preview element
    function createPreviewElement(file, index) {
      const previewDiv = document.createElement("div");
      previewDiv.className =
        "relative bg-white rounded-lg border border-cynBlack/20 overflow-hidden";
      previewDiv.dataset.fileIndex = index;

      const img = document.createElement("img");
      img.src = URL.createObjectURL(file);
      img.className = "w-full h-32 object-cover";
      img.alt = file.name;

      const removeBtn = document.createElement("button");
      removeBtn.type = "button";
      removeBtn.className =
        "absolute top-2 start-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1.5 transition-opacity";
      removeBtn.innerHTML =
        '<svg class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>';
      removeBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        removeFile(index);
      });

      const fileName = document.createElement("p");
      fileName.className =
        "text-xs text-cynBlack/60 truncate px-2 py-1 bg-white/90";
      fileName.textContent = file.name;

      previewDiv.appendChild(img);
      previewDiv.appendChild(removeBtn);
      previewDiv.appendChild(fileName);

      return previewDiv;
    }

    // Function to render all previews
    function renderPreviews() {
      previewContainer.innerHTML = "";
      if (selectedFiles.length === 0) {
        previewContainer.classList.replace("grid", "hidden");
        return;
      }

      previewContainer.classList.replace("hidden", "grid");
      selectedFiles.forEach((file, index) => {
        const previewElement = createPreviewElement(file, index);
        previewContainer.appendChild(previewElement);
      });
    }

    // Function to remove a file
    function removeFile(index) {
      // Revoke object URL to free memory
      const previewElement = previewContainer.querySelector(
        `[data-file-index="${index}"]`
      );
      if (previewElement) {
        const previewImg = previewElement.querySelector("img");
        if (previewImg && previewImg.src.startsWith("blob:")) {
          URL.revokeObjectURL(previewImg.src);
        }
      }

      selectedFiles.splice(index, 1);
      updateFileInput();
      renderPreviews();
    }

    // Handle file selection
    fileInput.addEventListener("change", function (e) {
      const newFiles = Array.from(e.target.files);

      // Add new files to selectedFiles array (avoid duplicates)
      newFiles.forEach((newFile) => {
        // Check if file already exists (by name and size)
        const exists = selectedFiles.some(
          (existingFile) =>
            existingFile.name === newFile.name &&
            existingFile.size === newFile.size
        );

        if (!exists) {
          selectedFiles.push(newFile);
        }
      });

      updateFileInput();
      renderPreviews();

      // Reset input value to allow selecting the same file again
      fileInput.value = "";
    });

    // Ensure files are included when form is submitted via htmx
    const form = document.getElementById("travelogue_form");
    if (form) {
      let customFormData = null;

      // Prepare FormData in configRequest
      form.addEventListener("htmx:configRequest", function (event) {
        // Update file input to include all selected files
        updateFileInput();

        // Create FormData manually to ensure files are included
        customFormData = new FormData();

        // Add all form fields
        const formElements = form.elements;
        for (let i = 0; i < formElements.length; i++) {
          const element = formElements[i];
          if (element.name && element.tagName !== "BUTTON") {
            if (element.type === "file") {
              // Add all selected files
              selectedFiles.forEach((file) => {
                customFormData.append("images[]", file);
              });
            } else if (
              element.type === "checkbox" ||
              element.type === "radio"
            ) {
              if (element.checked) {
                customFormData.append(element.name, element.value);
              }
            } else {
              customFormData.append(element.name, element.value);
            }
          }
        }
      });

      // Override xhr.send in beforeRequest
      form.addEventListener("htmx:beforeRequest", function (event) {
        if (customFormData) {
          const xhr = event.detail.xhr;
          if (xhr && xhr.send) {
            const originalSend = xhr.send.bind(xhr);
            xhr.send = function (data) {
              return originalSend(customFormData);
            };
          }
        }
      });
    }

    // Clean up object URLs when page unloads
    window.addEventListener("beforeunload", function () {
      selectedFiles.forEach((file) => {
        const previewImg = previewContainer.querySelector("img");
        if (previewImg && previewImg.src.startsWith("blob:")) {
          URL.revokeObjectURL(previewImg.src);
        }
      });
    });
  });
}
