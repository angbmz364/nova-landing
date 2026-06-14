import { gsap } from './libs/gsap';

const aboutAnimation = () => {
  gsap.utils.toArray('.about__card').forEach(card => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: 'top 85%',
    },
    opacity: 0,
    y: 50,
    duration: .5,
    scaleX: 0.9
  });
});
}

export default aboutAnimation;