const useScroll = () => {
  let position = 0;

  const setScroll = (value) => {
    const oldPosition = position;
    position = value;
    return [oldPosition, position];
  };
  return setScroll;
};

const handleScroll = useScroll();

globalThis.addEventListener('scroll', function () {
  const header = document.querySelector('.header');

  const [oldPosition, newPosition] = handleScroll(globalThis.scrollY);

  const isDownShow = globalThis.scrollY > 0;
  header.classList.toggle('header_down', isDownShow);

  const isDownHide = newPosition > oldPosition && globalThis.scrollY >= 636;
  header.classList.toggle('header_hide', isDownHide);
});
