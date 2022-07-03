
(function () {
  const tabs = document.querySelectorAll(".tab-head__item");
  const contents = document.querySelectorAll(".tab-content__item");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      changeTab(index);
    });
  });

  function changeTab(index) {
    setActiveClass(tabs, index);
    setActiveClass(contents, index);
  }

  function setActiveClass(arr, index) {
    arr.forEach((item) => {
      item.classList.remove("active");
    });
    arr[index].classList.add("active");
  }
})();
