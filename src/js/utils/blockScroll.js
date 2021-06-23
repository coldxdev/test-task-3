export const disableScroll = () => {
  document.body.dataset.scrollY = window.scrollY;

  const scrollWidth = window.innerWidth - document.body.offsetWidth;
  document.body.style.cssText = `
    overflow: hidden;
    position: fixed;
    height: 100vh;
    top: -${window.scrollY}px;
    left: 0;
    padding-right: ${scrollWidth}px;
    width: 100%;
    `;
};

export const enableScroll = () => {
  document.body.style.cssText = "";
  window.scroll({
    top: document.body.dataset.scrollY,
  });
};


