import { Carousel } from "@material-tailwind/react";

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
        src="https://get.wallhere.com/photo/black-monochrome-hands-night-photography-books-Nikon-library-fingers-sound-blackandwhite-bw-book-darkness-d5100-black-and-white-monochrome-photography-font-bookstore-johnidis-prozak-plato-musical-instrument-accessory-793266.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://biograph.online/wp-content/uploads/2021/11/V.-Nabokov-v-SSHA-foto-1959-g..jpg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://cs13.pikabu.ru/post_img/2023/08/22/4/og_og_1692681843275026473.jpg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  )
}
