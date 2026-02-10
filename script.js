
// Toggle text direction without changing the text content.
(function () {
  var toggleButton = document.getElementById("dir-toggle");

  if (!toggleButton) {
    return;
  }

  function setDirection(direction) {
    document.documentElement.setAttribute("dir", direction);
    toggleButton.textContent = direction === "rtl" ? "LTR" : "RTL";
  }

  var savedDirection = localStorage.getItem("pageDir") || "ltr";
  setDirection(savedDirection);

  toggleButton.addEventListener("click", function () {
    var currentDir = document.documentElement.getAttribute("dir") || "ltr";
    var nextDir = currentDir === "rtl" ? "ltr" : "rtl";
    localStorage.setItem("pageDir", nextDir);
    setDirection(nextDir);
  });
})();

// Show/hide the subscribe form when the button or X is clicked.
(function () {
  var openButton = document.getElementById("subscribe-button");
  var closeButton = document.getElementById("subscribe-close");
  var formSection = document.getElementById("subscribe-form");

  if (openButton && closeButton && formSection) {
    formSection.classList.add("is-hidden");
    openButton.addEventListener("click", function (event) {
      event.preventDefault();
      formSection.classList.remove("d-none");
      // Let the browser apply styles before fading in.
      window.setTimeout(function () {
        formSection.classList.remove("is-hidden");
      }, 10);
      formSection.scrollIntoView({ behavior: "smooth" });
    });

    closeButton.addEventListener("click", function () {
      formSection.classList.add("is-hidden");
      window.setTimeout(function () {
        formSection.classList.add("d-none");
      }, 300);
    });
  }
})();
