import { Link } from "react-router-dom";

import { VolumesItemType } from "@/schemas/api/volumes";

function EmptyCover() {
  return (
    <div className="w-36 h-52 bg-base-content flex items-center justify-center shadow-2xl">
      <h1 className="text-base-300 text-xl">No cover</h1>
    </div>
  );
}

export function BookCard(item: VolumesItemType) {
  if (!item.volumeInfo) return null;

  const { imageLinks, title, categories, authors } = item.volumeInfo;
  const bookId = item.id;
  const firstCategory = categories?.[0];
  const authorsInfo = authors?.join(", ");
  const smallThumbnail = imageLinks?.smallThumbnail;

  return (
    <Link
      to={`/books/${bookId}`}
      className="min-h-16 w-72 aspect-auto rounded-xl bg-base-200 flex flex-col gap-4 px-4 py-6 items-center duration-[350ms] ease-in-out hover:-translate-y-3 hover:drop-shadow-xl"
    >
      {smallThumbnail ? (
        <img className="w-36 h-52 shadow-2xl" src={smallThumbnail} />
      ) : (
        <EmptyCover />
      )}
      <div className="flex flex-col items-start w-full gap-1">
        <p className="link link-primary">{firstCategory}</p>
        <h1 className="font-bold text-xl line-clamp-1">{title}</h1>
        <p className="opacity-50 line-clamp-2">{authorsInfo}</p>
      </div>
    </Link>
  );
}
