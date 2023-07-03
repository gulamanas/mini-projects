const options = document.querySelectorAll(".option");

options.forEach((option) => {
  option.addEventListener("click", function () {
    options.forEach((option) => {
      option.classList.remove("active");
    });
    this.classList.add("active");
  });
});