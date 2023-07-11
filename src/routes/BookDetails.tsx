import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { AlertError, AlertInfo } from "@/components/Alert";
import { Spinner } from "@/components/Spinner";
import { DetailsCover } from "@/components/DetailsCover";

import { fetchBook } from "../services/api/fetchBook";

import { isObjectEmpty } from "../utils/object";

export function BookDetails() {
  const { id } = useParams<{ id: string }>();

  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["book", id],
    queryFn: () => fetchBook(id),
    enabled: id !== undefined,
  });

  if (isError) return <AlertError error={error} />;

  if (isLoading) return <Spinner />;

  if (!data || isObjectEmpty(data)) return <AlertInfo>API returned nothing :c</AlertInfo>;

  const { volumeInfo } = data;

  return (
    <div className="flex flex-col lg:flex-row w-full h-full">
      <div className="flex justify-center items-center bg-base-200 p-8 sm:p-8 xl:p-16 w-full lg:w-3/6 rounded-xl">
        <DetailsCover {...volumeInfo} />
      </div>
      <div className="flex flex-col gap-4 p-6 w-full lg:w-3/6">
        <div className="flex flex-col gap-2">
          <p className="opacity-60">{volumeInfo.categories?.at(0)}</p>
          <h1 className="text-2xl font-bold">{volumeInfo.title}</h1>
          <p className="link link-primary opacity-70">{volumeInfo.authors?.join(", ")}</p>
        </div>
        {volumeInfo.description && (
          <div className="border-2 border-base-200 p-5" dangerouslySetInnerHTML={{ __html: volumeInfo.description }} />
        )}
      </div>
    </div>
  );
}
