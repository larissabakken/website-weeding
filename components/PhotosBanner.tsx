"use client";

import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Image from "next/image";
import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function PhotosBanner() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="bg-[#f7e2d9]">
      <Carousel
        className="h-[500px]"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: false,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Image
              src="/carousel/photo2.png"
              alt="Edith & Christian"
              width={10000}
              height={10000}
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Image
              src="/carousel/photo3.png"
              alt="Edith & Christian"
              width={10000}
              height={10000}
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Image
              src="/carousel/photo4.png"
              alt="Edith & Christian"
              width={10000}
              height={10000}
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Image
              src="/carousel/photo5.png"
              alt="Edith & Christian"
              width={10000}
              height={10000}
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Image
              src="/carousel/photo6.png"
              alt="Edith & Christian"
              width={10000}
              height={10000}
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Image
              src="/carousel/photo7.png"
              alt="Edith & Christian"
              width={10000}
              height={10000}
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}
