import { gsap } from "./libs/gsap";

const pricingAnimations = () => {
  gsap.from('.pricing__disclaimer',
    {
      scrollTrigger: {
        trigger: '.pricing__disclaimer',
        start: 'top 85%'
      },
      y: 50,
      opacity: 0,
      duration: .4,
    }
  )
  gsap.from('.pricing__card',
    {
      scrollTrigger: {
        trigger: '.pricing__card',
        start: 'top 85%'
      },
      y: 100,
      opacity: 0,
      duration: .4,
      scaleX: .95,
    }
  )
}

export default pricingAnimations;