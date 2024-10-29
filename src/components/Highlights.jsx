import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { rightImg, watchImg } from "../utils"
import VideoCarousel from "./VideoCarousel"

const Highlights = () => {
    useGSAP(() => {
        gsap.to('#title', { opacity : 1,y : 0})
        gsap.to('.link', { opacity:1, y : 0, duration:1, stagger: 0.25})
        
           
    }, [])

  return (
    <section id="highlights" className="w-screen
    overflow-hidden h-full common-padding bg-zinc">
        <div className="screen-max-width">
            <div className="mb-12 w-full items-end md:flex justify-between">
                <h1 id="title" className="section-heading">
                    Get the highlights. 
                </h1>
                <div className="flex flex-wrap items-end">
                    <p className="link">
                        watch the film
                        <img src={rightImg} alt="watch " className="ml-2" />
                    </p>
                    <p className="link ml-6" >
                         watch the event
                        <img src={watchImg} alt="watch " className="ml-2" />
                    </p>
                </div>
            </div>

        <VideoCarousel />
        </div>

    </section>
  )
}

export default Highlights