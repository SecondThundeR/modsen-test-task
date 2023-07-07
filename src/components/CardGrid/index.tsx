import { BookCard } from "../BookCard";

import { VolumesType } from "../../schemas/api/volumes";

interface CardGridProps {
  cards: VolumesType["items"];
}

export function CardGrid({ cards }: CardGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {cards?.map((card) => {
        const volumeInfo = card.volumeInfo;
        if (volumeInfo === undefined || volumeInfo === null) return null;

        const { imageLinks, title, categories, authors } = volumeInfo;
        return (
          <BookCard
            key={card.id}
            imageUrl={imageLinks?.smallThumbnail}
            title={title}
            categories={categories}
            authors={authors}
          />
        );
      })}
    </div>
  );
}
