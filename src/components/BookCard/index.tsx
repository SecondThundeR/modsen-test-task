interface BookCardProps {
  imageUrl: string | undefined;
  category: string;
  title: string;
  authors: string[];
}

function EmptyCover() {
  return (
    <div className="w-36 h-52 bg-base-content flex items-center justify-center">
      <h1 className="text-base-300 text-xl">{"No cover :("}</h1>
    </div>
  );
}

export default function BookCard({ imageUrl, category, title, authors }: BookCardProps) {
  return (
    <div className="min-h-16 w-72 aspect-auto rounded-xl bg-base-200 flex flex-col gap-4 px-4 py-6 items-center">
      {imageUrl !== undefined ? <img className="w-36 h-52 shadow-2xl" src={imageUrl} /> : <EmptyCover />}
      <div className="flex flex-col items-start w-full gap-1">
        <a className="link link-primary">{category}</a>
        <h1 className="font-bold text-xl">{title}</h1>
        <p className="opacity-50">{authors.join(", ")}</p>
      </div>
    </div>
  );
}
