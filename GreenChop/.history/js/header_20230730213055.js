const OpenMenu = () => {
  let headerController = document.querySelector(".header-controller");
  let headerLayout = document.querySelector(".header-layout");

  headerController.classList.add("menu-open");
  headerLayout.classList.add("menu-open");

  headerController.classList.remove("menu-close");
  headerLayout.classList.remove("menu-close");
};
