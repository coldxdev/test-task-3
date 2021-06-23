export default (el, class_name) => {
  for (var i = 0; i < el.length; i++) {
    el[i].classList.remove(class_name);
  }
};
