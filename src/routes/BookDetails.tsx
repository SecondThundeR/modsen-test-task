import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchBook } from "../services/api/fetchBook";
import { Spinner } from "../components/Spinner";

export function BookDetails() {
  const { id } = useParams<{ id: string }>();

  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["book", id],
    queryFn: () => fetchBook(id),
    enabled: id !== undefined,
  });

  if (isLoading) return <Spinner />;

  if (isError)
    return (
      <div>
        <h1>Error!</h1>
        <p>{JSON.stringify(error, null, 4)}</p>
      </div>
    );

  if (!data) return <h1>No data :c</h1>;

  const { volumeInfo } = data;

  return (
    <div className="flex flex-col lg:flex-row w-full h-full">
      <div className="flex justify-center items-center bg-base-200 p-6 w-full lg:w-3/6">
        <img
          className="h-[320px] sm:h-[512px] lg:h-[640px] aspect-auto"
          srcSet={`${volumeInfo.imageLinks?.small} 1x, ${volumeInfo.imageLinks?.medium} 2x, ${volumeInfo.imageLinks?.large} 3x`}
          src={volumeInfo.imageLinks?.large}
          alt={`${volumeInfo.title} cover`}
        />
      </div>
      <div className="flex flex-col gap-4 p-6 w-full lg:w-3/6">
        <div className="flex flex-col gap-2">
          <p className="opacity-60">{volumeInfo.categories?.at(0)}</p>
          <h1 className="text-2xl font-bold">{volumeInfo.title}</h1>
          <p className="link link-primary opacity-70">{volumeInfo.authors?.join(", ")}</p>
        </div>
        <div
          className="border-2 border-base-200 p-5"
          dangerouslySetInnerHTML={{ __html: volumeInfo.description || "" }}
        />
      </div>
    </div>
  );
}
