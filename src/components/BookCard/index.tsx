interface BookCardProps {
  imageUrl: string | undefined;
  categories?: string[] | null;
  title: string;
  authors?: string[] | null;
}

function EmptyCover() {
  return (
    <div className="w-36 h-52 bg-base-content flex items-center justify-center shadow-2xl">
      <h1 className="text-base-300 text-xl">No cover</h1>
    </div>
  );
}

export function BookCard({ imageUrl, categories, title, authors }: BookCardProps) {
  const firstCategory = categories?.[0] || "";
  const authorsInfo = authors?.join(", ") || "";

  return (
    <div className="min-h-16 w-72 aspect-auto rounded-xl bg-base-200 flex flex-col gap-4 px-4 py-6 items-center duration-300 ease-in-out hover:-translate-y-3">
      {imageUrl ? <img className="w-36 h-52 shadow-2xl" src={imageUrl} /> : <EmptyCover />}
      <div className="flex flex-col items-start w-full gap-1">
        <a className="link link-primary">{firstCategory}</a>
        <h1 className="font-bold text-xl line-clamp-2">{title}</h1>
        <p className="opacity-50">{authorsInfo}</p>
      </div>
    </div>
  );
}
