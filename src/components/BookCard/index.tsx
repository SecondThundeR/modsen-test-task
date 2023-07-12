import { Link } from "react-router-dom";

import { VolumesItemType } from "@/schemas/api/volumes";

function EmptyCover() {
  return (
    <div className="flex h-52 w-36 items-center justify-center bg-base-content shadow-2xl">
      <h1 className="text-xl text-base-300">No cover</h1>
    </div>
  );
}

export function BookCard(item: VolumesItemType) {
  if (!item.volumeInfo) return null;

  const { imageLinks, title, categories, authors } = item.volumeInfo;
  const bookId = item.id;
  const firstCategory = categories?.[0];
  const authorsInfo = authors?.join(", ");
  const thumbnail = imageLinks?.thumbnail;

  return (
    <Link
      to={`/books/${bookId}`}
      className="min-h-16 flex aspect-auto w-72 flex-col items-center gap-4 rounded-xl bg-base-200 px-4 py-6 duration-[350ms] ease-in-out hover:-translate-y-3 hover:drop-shadow-xl"
    >
      {thumbnail ? (
        <img className="h-52 w-36 shadow-2xl" src={thumbnail} />
      ) : (
        <EmptyCover />
      )}
      <div className="flex w-full flex-col items-start gap-1">
        <p className="link-primary link">{firstCategory}</p>
        <h1 className="line-clamp-1 text-xl font-bold">{title}</h1>
        <p className="line-clamp-2 opacity-50">{authorsInfo}</p>
      </div>
    </Link>
  );
}
