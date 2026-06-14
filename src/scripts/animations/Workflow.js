import { gsap } from "./libs/gsap";

const workflowAnimation = () => {
  gsap.from('.workflow__title',
    {
      scrollTrigger: {
        trigger: '.workflow__title',
        start: 'top 85%'
      },
      y: 50,
      opacity: 0,
      duration: .4,
    }
   )
  gsap.utils.toArray('.workflow__card').forEach(card => {
    gsap.from(card,
      {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%'
        },
        opacity: 0,
        y: 50,
        duration: .5,
        scaleX: 0.9
      }
     )
  } )
}

export default workflowAnimation