const shareButton = document.querySelector(".share__icon");

shareButton.addEventListener("click", () => {
  if (window.screen.width < 1100) {
    document.querySelector(".person").classList.toggle("none");
    document.querySelector(".social").classList.toggle("show__social__mobile");
    document.querySelector(".share").classList.toggle("share__section__black");
    document
      .querySelector(".share__icon")
      .classList.toggle("share__icon__black");
  }

  if (window.screen.width >= 1100) {
    document.querySelector(".social").classList.toggle("show__social__desktop");
    document
      .querySelector(".share__icon")
      .classList.toggle("share__icon__black");
  }
});
