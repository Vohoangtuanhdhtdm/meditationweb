// components/ui/CarouselItem.tsx
import { Card, CardContent } from "@/components/ui/card";

interface CarouselItemProps {
  imageUrl: string;
  title: string;
}

export function CarouselItem({ imageUrl, title }: CarouselItemProps) {
  return (
    <Card className="w-[300px] shrink-0 snap-start rounded-2xl shadow-md transition-transform hover:scale-105">
      <CardContent className="p-0">
        <img
          src={imageUrl}
          alt={title}
          className="rounded-t-2xl w-full h-48 object-cover"
        />
        <div className="p-4 text-center font-semibold">{title}</div>
      </CardContent>
    </Card>
  );
}
