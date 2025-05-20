// components/ui/Carousel.tsx
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  children: React.ReactNode;
}

export function Carousel({ children }: CarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = container.offsetWidth / 3; // scroll 1 item width

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full">
      <div className="flex justify-between mb-4">
        <Button variant="ghost" size="icon" onClick={() => scroll("left")}>
          <ChevronLeft />
        </Button>
        <Button variant="ghost" size="icon" onClick={() => scroll("right")}>
          <ChevronRight />
        </Button>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth gap-4 no-scrollbar snap-x snap-mandatory"
      >
        {children}
      </div>
    </div>
  );
}
