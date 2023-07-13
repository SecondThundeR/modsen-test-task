import { useEffect } from "react";
import {
  type QueryFunctionContext,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { AlertError } from "@/components/AlertError";
import { AlertInfo } from "@/components/AlertInfo";
import { CardGrid } from "@/components/CardGrid";
import { Spinner } from "@/components/Spinner";

import { ALERT_TEXT } from "@/constants/alertText";
import { ROUTES } from "@/constants/routes";

import { useBooksParams } from "@/hooks/useBooksParams";

import { fetchBooks } from "@/services/api/fetchBooks";

import { getPaginatorText } from "@/utils/getPaginatorText";

export function Books() {
  const {
    params: { searchQuery, selectedCategory, selectedSort, currentPage },
    isMissingParams,
    incrementPageParam,
  } = useBooksParams();
  const navigate = useNavigate();
  const {
    data,
    error,
    isError,
    isLoading,
    isRefetching,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["books", searchQuery, selectedCategory, selectedSort],
    queryFn: ({ pageParam }: QueryFunctionContext<(string | null)[], string>) =>
      fetchBooks(searchQuery, selectedCategory, selectedSort, pageParam),
    getNextPageParam: ({ items }) =>
      !items ? null : (Number(currentPage) || 0) + 1,
    enabled: !isMissingParams,
    refetchOnMount: false,
  });

  useEffect(() => {
    if (isMissingParams) navigate(ROUTES.home);
  }, [isMissingParams, navigate]);

  const onClick = async () => {
    incrementPageParam();
    await fetchNextPage();
  };

  if (isError) return <AlertError error={error} />;

  if (isLoading || (!isFetchingNextPage && isRefetching)) return <Spinner />;

  /*
   * Idk, but Google Books API returns different "totalItems" on pagination
   * Returning latest result count for now
   */
  const resultsCount =
    data?.pages.flatMap(({ totalItems }) => totalItems).at(-1) ?? 0;
  const isResultsCountEmpty = resultsCount === 0;

  return (
    <>
      <div className="flex w-full flex-col items-center gap-4">
        {data && (
          <>
            <h1 className="font-medium opacity-50">
              Found {resultsCount} results
            </h1>
            {isResultsCountEmpty && <AlertInfo>{ALERT_TEXT}</AlertInfo>}
            <CardGrid pages={data.pages} />
            {!isResultsCountEmpty && (
              <button
                className="btn-primary btn"
                disabled={!hasNextPage || isFetchingNextPage}
                onClick={onClick}
              >
                {getPaginatorText(isFetchingNextPage, hasNextPage)}
              </button>
            )}
          </>
        )}
      </div>
    </>
  );
}
