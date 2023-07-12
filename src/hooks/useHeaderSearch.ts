import { FormEvent, useCallback } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

import { DEFAULT_SEARCH_PARAMETERS } from "@/constants/defaultSearchParams";

const DEFAULT_CATEGORY = DEFAULT_SEARCH_PARAMETERS.category;
const DEFAULT_SORT = DEFAULT_SEARCH_PARAMETERS.sorting;

interface UseHeaderSearchOptions {
  queryKey: string[];
}

export function useHeaderSearch(options: UseHeaderSearchOptions) {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { queryKey } = options;
  const searchParam = searchParams.get("q") ?? "";
  const categoryParam = searchParams.get("category") ?? DEFAULT_CATEGORY;
  const sortParam = searchParams.get("sort") ?? DEFAULT_SORT;

  const onSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const formData = new FormData(event.currentTarget);
      const q = formData.get("q") as string;
      const category = formData.get("categories") as string;
      const sort = formData.get("sort") as string;

      queryClient
        .resetQueries({
          type: "all",
          queryKey: queryKey,
          exact: false,
        })
        .catch(console.error);
      navigate("/books");
      setSearchParams({ q, category, sort, page: "0" });
    },
    [queryClient, queryKey, navigate, setSearchParams],
  );

  return { searchParam, categoryParam, sortParam, onSubmit };
}
