const OpenMenu = () => {
  let headerController = document.querySelector(".header-controller");
  let headerLayout = document.querySelector(".header-layout");

  headerController.classList.add("menu-open");
  headerLayout.classList.add("menu-open");
  headerController.classList.remove("menu-close");
  headerLayout.classList.remove("menu-close");
};
const CloseMenu = () => {
  let headerController = document.querySelector(".header-controller");
  let headerLayout = document.querySelector(".header-layout");

  headerController.classList.add("menu-close");
  headerLayout.classList.add("menu-close");
  headerController.classList.remove("menu-open");
  headerLayout.classList.remove("menu-open");
};
