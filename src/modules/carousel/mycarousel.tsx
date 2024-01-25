import { Carousel } from "@material-tailwind/react";
import carousel1 from "@assets/carousel1.jpg"
import carousel2 from "@assets/carousel2.jpg"
import carousel3 from "@assets/carousel3.jpg"

export const MyCarousel = () => {
  return (
    <Carousel
      className="h-96 rounded-xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src={ carousel1 }
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src={ carousel2 }
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src={ carousel3 }
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  )
}
