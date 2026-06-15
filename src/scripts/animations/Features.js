import { gsap } from "./libs/gsap";

export const featuresAnimations = () => {
  gsap.utils.toArray(".features__card").forEach((card) => {
    gsap.from(card, {
      scrollTrigger: {
        start: "top 85%",
        trigger: card,
      },
      opacity: 0,
      y: 50,
      duration: 0.5,
    });
  });
};

