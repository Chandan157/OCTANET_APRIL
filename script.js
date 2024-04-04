document.querySelectorAll("a").forEach((anchor) => {
  if (anchor.getAttribute("href").startsWith("#")) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");

      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth",
      });
    });
  }
});
