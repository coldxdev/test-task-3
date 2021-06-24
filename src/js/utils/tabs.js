/*
TABS BY COLDXEV
version 2.0

USAGE: ADD HTML DATA ATRIBUTES
add data-tabs for tabs wrapper
add data-tab for tab btn
add data-tab-contents for tab content
*/

let tabsElems = document.querySelectorAll("[data-tabs]");

if (tabsElems.length > 0) {
  for (let i = 0; i < tabsElems.length; i++) {
    let tab = tabsElems[i];
    let tabBtnElems = tab.querySelectorAll("[data-tab]");
    let tabContentElems = tab.querySelectorAll("[data-tab-content]");
    for (let i = 0; i < tabBtnElems.length; i++) {
      let tabBtn = tabBtnElems[i];
      let tabContent = tabContentElems[i];
      tabBtn.addEventListener("click", (e) => {
        e.preventDefault();
        // remove class active for all elements
        for (let i = 0; i < tabBtnElems.length; i++) {
          tabBtnElems[i].classList.remove("active");
          tabContentElems[i].classList.remove("active");
        }
        tabBtn.classList.add("active");
        tabContent.classList.add("active");
      });
    }
  }
}

// OLD VERSION
// CONNECT BY HREF AND ID
// const tabElems = document.querySelectorAll(".tab");
// const tabContentElems = document.querySelectorAll(".tab-content");

// if (tabElems.length > 0) {
//   for (let i = 0; i < tabElems.length; i++) {
//     const tab = tabElems[i];
//     const tabContent = tabContentElems[i];
//     tab.addEventListener("click", function (e) {
//       e.preventDefault();
//       const tabs = this.parentNode.children;
//       const contentTabElems = this.parentNode.nextElementSibling.children;

//       for (let tab of tabs) {
//         tab.classList.remove("tab--active");
//       }

//       for (let content of contentTabElems) {
//         content.classList.remove("tab-content--active");
//       }

//       this.classList.add("tab--active");
//       if (tab.getAttribute("href").slice(1) === tabContent.getAttribute("id")) {
//         tabContent.classList.add("tab-content--active");
//       }
//     });
//   }
// }
