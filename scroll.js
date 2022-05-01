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

const refContainerImg = document.querySelector('.renovations__images');
const refImg = document.querySelector('.renovations__before');
const refCircle = document.querySelector('.renovation__circle');

refContainerImg.addEventListener('mousemove', (event) => {
  const positionX = event.screenX;
  const windowWidth = globalThis.innerWidth;
  const containerWidth = refContainerImg.clientWidth;

  const padding = (windowWidth - containerWidth) / 2;
  const positionLineX = 100 - ((positionX - padding) / containerWidth) * 100;
  refImg.style.clipPath = `inset(0 ${positionLineX}% 0 0 )`;

  const positionCircle = positionX - padding;

  if (positionCircle > 0 && positionCircle <= containerWidth) {
    refCircle.style.left = `${positionCircle}px`;
  }
});
