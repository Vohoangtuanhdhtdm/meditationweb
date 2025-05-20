import { carouselData } from "@/types/data";
import { Carousel } from "./Carousel";
import { CarouselItem } from "./CarouselItem";

const Test = () => {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Khám Phá Chủ Đề</h2>
      <Carousel>
        {carouselData.map((item, index) => (
          <CarouselItem key={index} {...item} />
        ))}
      </Carousel>
    </section>
  );
};

export default Test;
