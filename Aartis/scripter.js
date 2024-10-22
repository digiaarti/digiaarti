const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("darkTheme");
});

// Check for saved theme preference on page load
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("darkTheme");
  themeToggle.checked = true; // Set the checkbox to checked
}

// Save theme preference to localStorage
themeToggle.addEventListener("change", function () {
  if (this.checked) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
