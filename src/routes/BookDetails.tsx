import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { AlertError, AlertInfo } from "@/components/Alert";
import { BookDescription } from "@/components/BookDescription";
import { DetailsCover } from "@/components/DetailsCover";
import { Spinner } from "@/components/Spinner";

import { fetchBook } from "@/services/api/fetchBook";

import { isObjectEmpty } from "@/utils/object";

export function BookDetails() {
  const { id } = useParams<{ id: string }>();

  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["book", id],
    queryFn: () => fetchBook(id),
    enabled: id !== undefined,
  });

  if (isError) return <AlertError error={error} />;

  if (isLoading) return <Spinner />;

  if (!data || isObjectEmpty(data))
    return <AlertInfo>API returned nothing :c</AlertInfo>;

  const { volumeInfo } = data;
  const { title, description } = volumeInfo;
  const category = volumeInfo.categories?.at(0);
  const authors = volumeInfo.authors?.join(", ");

  return (
    <div className="flex h-full w-full flex-col lg:flex-row">
      <div className="flex w-full items-center justify-center rounded-xl bg-base-200 p-8 sm:p-8 lg:w-3/6 xl:p-16">
        <DetailsCover {...volumeInfo} />
      </div>
      <div className="flex w-full flex-col gap-4 p-6 lg:w-3/6">
        <div className="flex flex-col gap-2">
          <p className="opacity-60">{category}</p>
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="link-primary link opacity-70">{authors}</p>
        </div>
        <BookDescription description={description} />
      </div>
    </div>
  );
}
