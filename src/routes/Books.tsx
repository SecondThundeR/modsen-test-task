import { useEffect } from "react";
import { useInfiniteQuery, useQueryClient } from "react-query";
import { useNavigate, useSearchParams } from "react-router-dom";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

import { CardGrid } from "../components/CardGrid";
import { Spinner } from "../components/Spinner";

import { ALERT_TEXT } from "../constants/alertText";

import { fetchBooks } from "../services/api/fetchBooks";
import { Alert } from "../components/Alert";

export function Books() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const searchQuery = searchParams.get("q");
  const selectedCategory = searchParams.get("category");
  const selectedSort = searchParams.get("sort");
  const currentPage = searchParams.get("page");
  const isMissingParameters = !searchQuery || !selectedCategory || !selectedSort || !currentPage;

  const { data, isError, isLoading, isRefetching, fetchNextPage, hasNextPage, isFetchingNextPage, refetch } =
    useInfiniteQuery({
      queryKey: ["books"],
      queryFn: ({ pageParam }) => fetchBooks(searchQuery, selectedCategory, selectedSort, pageParam),
      getNextPageParam: ({ items }) => (!items ? null : (Number(currentPage) || 0) + 1),
      enabled: !isMissingParameters,
    });

  // Idk, but Google Books API returns different "totalItems" on pagination
  // Returning latest result for now
  const resultsCount = data?.pages.flatMap(({ totalItems }) => totalItems).at(-1) || 0;

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

  if (isLoading || (!isFetchingNextPage && isRefetching)) return <Spinner />;

  return (
    <>
      <div className="flex flex-col gap-4 items-center w-full">
        <h1 className="font-medium opacity-50">Found {resultsCount} results</h1>
        {resultsCount === 0 && <Alert>{ALERT_TEXT}</Alert>}
        {data && <CardGrid pages={data.pages} />}
        {resultsCount !== 0 && (
          <button
            className="btn btn-primary"
            disabled={!hasNextPage || isFetchingNextPage}
            onClick={() => {
              const updatedSearchParams = new URLSearchParams(searchParams.toString());
              updatedSearchParams.set("page", String(Number(currentPage) + 1));
              setSearchParams(updatedSearchParams.toString());
              fetchNextPage();
            }}
          >
            {isFetchingNextPage ? "Loading more..." : hasNextPage ? "Load More" : "Nothing more to load"}
          </button>
        )}
      </div>
    </>
  );
}
