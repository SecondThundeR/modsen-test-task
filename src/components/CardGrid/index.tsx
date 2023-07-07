import { BookCard } from "../BookCard";

import { VolumesType } from "../../schemas/api/volumes";

interface CardGridProps {
  pages: VolumesType[] | undefined;
}

export function CardGrid({ pages }: CardGridProps) {
  const itemsArray = pages?.flatMap(({ items }) => items);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {itemsArray?.map((item) => {
        if (!item) return null;

        const volumeInfo = item?.volumeInfo;
        if (volumeInfo === undefined || volumeInfo === null) return null;

        const { imageLinks, title, categories, authors } = volumeInfo;
        return (
          <BookCard
            key={item.etag}
            id={item.id}
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
