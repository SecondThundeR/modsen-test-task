import { FormEvent, useCallback } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { DEFAULT_SEARCH_PARAMETERS } from "@/constants/defaultSearchParams";

const DEFAULT_CATEGORY = DEFAULT_SEARCH_PARAMETERS["category"];
const DEFAULT_SORT = DEFAULT_SEARCH_PARAMETERS["sorting"];

export function useHeaderSearch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const searchParam = searchParams.get("q") || "";
  const categoryParam = searchParams.get("category") || DEFAULT_CATEGORY;
  const sortParam = searchParams.get("sort") || DEFAULT_SORT;

  const onSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const formData = new FormData(event.currentTarget);
      const q = formData.get("q") as string;
      const category = formData.get("categories") as string;
      const sort = formData.get("sort") as string;

      navigate("/books");
      setSearchParams({ q, category, sort, page: "0" });
    },
    [navigate, setSearchParams],
  );

  return { searchParam, categoryParam, sortParam, onSubmit };
}
