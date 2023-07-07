import { useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import { useNavigate, useSearchParams } from "react-router-dom";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

import { BookCard } from "../components/BookCard";

import { ALERT_TEXT } from "../constants/alertText";

import { fetchBooks } from "../services/api/fetchBooks";
import { Spinner } from "../components/Spinner";

export function Books() {
  const [searchParams, _] = useSearchParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const searchQuery = searchParams.get("q");
  const selectedCategory = searchParams.get("category");
  const selectedSort = searchParams.get("sort");
  const currentPage = searchParams.get("page");
  const isMissingParameters = !searchQuery || !selectedCategory || !selectedSort || !currentPage;

  const { data, isError, isLoading, isRefetching, refetch } = useQuery({
    queryKey: ["books"],
    queryFn: () => fetchBooks(searchQuery, selectedCategory, selectedSort, currentPage),
    enabled: !isMissingParameters,
  });

  useEffect(() => {
    if (isMissingParameters) navigate("/");
  }, []);

  useEffect(() => {
    refetch();

    return () => {
      queryClient.cancelQueries({ queryKey: ["books"] });
    };
  }, [searchQuery, selectedCategory, selectedSort]);

  if (isError) return <h1 className="text-error text-bold text-xl">Something wrong happened! Try again</h1>;

  if (isLoading || isRefetching) return <Spinner />;

  return (
    <>
      <div className="flex flex-col sm:w-1/3 gap-4 items-center">
        <h1 className="font-medium opacity-50">Found {data?.totalItems} results</h1>
        {data?.totalItems === 0 && (
          <div className="alert alert-info">
            <InformationCircleIcon className="h-6 w-6 stroke-current shrink-0" />
            <span>{ALERT_TEXT}</span>
          </div>
        )}
      </div>
      {data && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {data.items?.map((item) => {
            const volumeInfo = item.volumeInfo;
            if (volumeInfo === undefined || volumeInfo === null) return null;
            const { imageLinks, title, categories, authors } = volumeInfo;
            return (
              <BookCard
                key={item.id}
                imageUrl={imageLinks?.smallThumbnail}
                title={title}
                categories={categories}
                authors={authors}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
