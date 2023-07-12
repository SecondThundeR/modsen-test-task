import { useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { AlertError, AlertInfo } from "@/components/Alert";
import { CardGrid } from "@/components/CardGrid";
import { Spinner } from "@/components/Spinner";

import { ALERT_TEXT } from "@/constants/alertText";

import { useBooksParams } from "@/hooks/useBooksParams";

import { fetchBooks } from "@/services/api/fetchBooks";

export function Books() {
  const {
    params: { searchQuery, selectedCategory, selectedSort, currentPage },
    isMissingParams,
    incrementPageParam,
  } = useBooksParams();
  const navigate = useNavigate();

  const { data, error, isError, isLoading, isRefetching, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["books", searchQuery, selectedCategory, selectedSort],
      queryFn: ({ pageParam }) => fetchBooks(searchQuery, selectedCategory, selectedSort, pageParam as string),
      getNextPageParam: ({ items }) => (!items ? null : (Number(currentPage) || 0) + 1),
      enabled: !isMissingParams,
      refetchOnMount: false,
    });

  useEffect(() => {
    if (isMissingParams) navigate("/");
  }, [isMissingParams, navigate]);

  const onClick = async () => {
    incrementPageParam();
    await fetchNextPage();
  };

  // Idk, but Google Books API returns different "totalItems" on pagination
  // Returning latest result for now
  const resultsCount = data?.pages.flatMap(({ totalItems }) => totalItems).at(-1) ?? 0;

  if (isError) return <AlertError error={error} />;

  if (isLoading || (!isFetchingNextPage && isRefetching)) return <Spinner />;

  return (
    <>
      <div className="flex flex-col gap-4 items-center w-full">
        {data && (
          <>
            <h1 className="font-medium opacity-50">Found {resultsCount} results</h1>
            {resultsCount === 0 && <AlertInfo>{ALERT_TEXT}</AlertInfo>}
            <CardGrid pages={data.pages} />
            {resultsCount !== 0 && (
              <button className="btn btn-primary" disabled={!hasNextPage || isFetchingNextPage} onClick={onClick}>
                {isFetchingNextPage ? "Loading more..." : hasNextPage ? "Load More" : "Nothing more to load"}
              </button>
            )}
          </>
        )}
      </div>
    </>
  );
}
