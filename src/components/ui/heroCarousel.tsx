"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const IMAGES = [
  {
    src: "images/shoes5.jpg",
    alt: "Image 1",
  },
  {
    src: "images/suit11.jpg",
    alt: "Image 2",
  },
  {
    src: "images/bck1.jpeg",
    alt: "Image 3",
  },
  {
    src: "images/bck15.jpg",
    alt: "Image 3",
  },
  {
    src: "images/bck9.jpg",
    alt: "Image 3",
  },
];

export default function HeroCarousel() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000, // 2 seconds between slides
        }),
      ]}
      className="w-full max-w-4xl mx-auto"
      opts={{
        align: "center",
        loop: true, // Enable infinite loop
      }}
    >
      <CarouselContent className="flex gap-4">
        {IMAGES.map((image, index) => (
          <CarouselItem key={index} className="w-full h-full">
            <img
              src={image.src}
              alt={image.alt}
              className="object-cover w-full h-full"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
