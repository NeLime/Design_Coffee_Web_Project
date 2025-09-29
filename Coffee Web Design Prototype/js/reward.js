const section = document.querySelector("section"),
  overlay = document.querySelector(".overlay"),
  showBtns = document.querySelectorAll(".arrow"),
  closeBtn = document.querySelector(".close-btn");

showBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    section.classList.add("active");
  });
});

overlay.addEventListener("click", () => {
  section.classList.remove("active");
});

closeBtn.addEventListener("click", () => {
  section.classList.remove("active");
});
