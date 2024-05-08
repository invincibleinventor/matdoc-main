import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { CircleUser } from "lucide-react";
const WhyTheyLove = () => {
  const data = [
    {
      id: 1,
      para: " Allotments list alone is worth it. And the fact that it gets  updated right after each round is purely unbelievable. ",
      user: "Yuvan Shankar S P",
    },
    {
      id: 1,
      para: " Allotments list alone is worth it. And the fact that it gets  updated right after each round is purely unbelievable. ",
      user: "Ankit Dhavale",
    },
    {
      id: 1,
      para: " Allotments list alone is worth it. And the fact that it gets  updated right after each round is purely unbelievable. ",
      user: "Prasun Bikash Sahoo",
    },
    {
      id: 1,
      para: " Allotments list alone is worth it. And the fact that it gets  updated right after each round is purely unbelievable. ",
      user: "Yuvan Shankar S P",
    },
    {
      id: 1,
      para: " Allotments list alone is worth it. And the fact that it gets  updated right after each round is purely unbelievable. ",
      user: "Yuvan Shankar S P",
    },
    {
      id: 1,
      para: " Allotments list alone is worth it. And the fact that it gets  updated right after each round is purely unbelievable. ",
      user: "Yuvan Shankar S P",
    },
  ];
  return (
    <section className="relative z-40 w-full pt-12 pb-10 bg-black">
      <div className="relative px-5 mx-auto lg:container xl:max-w-screen-xl">
        <p className="text-sm text-white" data-aos="fade-up">
          ASK OUR USERS
        </p>
        <h2 className="mt-1 mb-5 text-white" data-aos="fade-up">
          Why they love MAT DOC
        </h2>
        <Swiper
          spaceBetween={20}
          className="pt-20 mt-12 mySwiper"
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          modules={[Autoplay, Navigation, Pagination]}
          navigation={true}
          pagination={{ clickable: true }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            767: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
            1208: {
              slidesPerView: 3,
            },
          }}
        >
          {data.map((item) => (
            <SwiperSlide
              key={item.id}
              className="border rounded border-secondary-sky min-h-[320px] h-full p-8  max-h-[320px]  cursor-grab"
            >
              <div className="min-h-[200px]">
                <p className="text-xl text-white line-clamp-5">{item.para}</p>
              </div>
              <div className="flex items-center justify-start mt-5 text-white ">
                <CircleUser className="mr-5 text-white w-9" size={28} />
                <p className="text-base text-white"> {item.user}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default WhyTheyLove;
