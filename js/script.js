const mobileBtn = document.getElementById("menu-btn-mobile-tab");
sideMenu = document.getElementById("sidebar");
menuExit = document.getElementById("menu-exit");

mobileBtn.addEventListener("click", () => {
  // mobileBtn.style.background = "rgba(255, 255, 255, 0.4)";
  // mobileBtn.style.boxShadow = "0 0 0 1rem rgba(255, 255, 255, 0.4)";
  sideMenu.style.transform = "translateX(-20rem)";
});

menuExit.addEventListener("click", () => {
  sideMenu.style.transform = "translateX(20rem)";
});
