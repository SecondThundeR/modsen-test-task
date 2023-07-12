import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

export function useBooksParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get("q");
  const selectedCategory = searchParams.get("category");
  const selectedSort = searchParams.get("sort");
  const currentPage = searchParams.get("page");
  const isMissingParams = !searchQuery || !selectedCategory || !selectedSort || !currentPage;

  const incrementPageParam = useCallback(() => {
    const updatedSearchParams = new URLSearchParams(searchParams.toString());
    updatedSearchParams.set("page", String(Number(currentPage) + 1));
    setSearchParams(updatedSearchParams.toString());
  }, [currentPage, searchParams, setSearchParams]);

  return {
    params: {
      searchQuery,
      selectedCategory,
      selectedSort,
      currentPage,
    },
    isMissingParams,
    incrementPageParam,
  };
}
