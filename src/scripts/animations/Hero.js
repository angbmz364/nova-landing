import {gsap} from './libs/gsap';

const heroAnimation = () => {
  gsap.from(
    '.hero__title',
    {
      opacity: 0,
      duration: .5,
      y: 50
    }
  )
}

export default heroAnimation;