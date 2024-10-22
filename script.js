const themeToggle = document.getElementById("theme-toggle");
const omIcon = document.getElementById("om"); // Get the om icon element
const reqIcon = document.querySelectorAll('[src="./resources/reqIcon.png"]'); // Select all elements with reqIcon.png

themeToggle.addEventListener("change", () => {
    document.body.classList.toggle("darkTheme");

    // Change icons based on theme
    if (document.body.classList.contains("darkTheme")) {
        omIcon.href = "./resources/omdark.png";
        reqIcon.forEach(element => {
             element.src = "./resources/reqIcon.png";
        });
    } else {
        omIcon.href = "./resources/om.png";
        reqIcon.forEach(element => {
            element.src = "./resources/reqIcondark.png";
       });
    }
});

// Check for saved theme preference on page load
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('darkTheme');
    themeToggle.checked = true; // Set the checkbox to checked
}

// Save theme preference to localStorage
themeToggle.addEventListener('change', function() {
  if (this.checked) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});