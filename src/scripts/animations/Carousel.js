import { gsap } from "./libs/gsap";

export default function initCarousel() {
  const track = document.querySelector("#carousel-track");
  const slides = gsap.utils.toArray(".carousel-slide");

  const prevBtn = document.querySelector("#carousel-prev");
  const nextBtn = document.querySelector("#carousel-next");

  if (!track || slides.length === 0) return;

  const state = {
    index: 0,
    animating: false,
  };

  let positions = [];
  let totalWidth = 0;
  let slideWidth = slides[0].offsetWidth;
  let gap = parseFloat(getComputedStyle(track).gap) || 0;
  let step = slideWidth + gap;

  function calculate() {
    slideWidth = slides[0].offsetWidth;
    gap = parseFloat(getComputedStyle(track).gap) || 0;
    step = slideWidth + gap;

    positions = slides.map((_, i) => i * step);
    totalWidth = step * slides.length;
  }

  function getOffset(index) {
    const target = slides[index];

    return (
      window.innerWidth / 2 -
      target.offsetLeft -
      target.offsetWidth / 2
    );
  }

  function goTo(newIndex, direction = 1) {
    if (state.animating) return;
    state.animating = true;

    state.index = gsap.utils.wrap(0, slides.length, newIndex);

    const x = getOffset(state.index);

    gsap.to(track, {
      x,
      duration: 0.6,
      ease: "power3.out",
      overwrite: true,
      onComplete: () => {
        state.animating = false;
      },
    });
  }

  calculate();
  goTo(0, 1);

  nextBtn?.addEventListener("click", () => {
    goTo(state.index + 1, 1);
  });

  prevBtn?.addEventListener("click", () => {
    goTo(state.index - 1, -1);
  });

  window.addEventListener("resize", () => {
    calculate();
    goTo(state.index, 0);
  });
}