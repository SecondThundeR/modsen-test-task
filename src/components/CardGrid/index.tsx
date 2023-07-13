import { BookCard } from "@/components/BookCard";

import { VolumesType } from "@/schemas/api/volumes";

interface CardGridProps {
  pages: VolumesType[];
}

export function CardGrid({ pages }: CardGridProps) {
  const itemsArray = pages?.flatMap(({ items }) => items);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {itemsArray?.map((item) => {
        if (!item) return null;
        const { id, etag, volumeInfo } = item;
        return <BookCard key={etag} id={id} {...volumeInfo} />;
      })}
    </div>
  );
}
