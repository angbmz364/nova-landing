import { gsap } from './libs/gsap';

const footerAnimation = () => {
  gsap.from('.footer__title', {
    scrollTrigger: {
      trigger: '.footer__title',
      start: 'top 85%',
    },
    opacity: 0,
    y: 50,
    duration: .4,
    ease: 'power3.out'
  });
}

export default footerAnimation;