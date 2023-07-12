import axios from "axios";

import { DEFAULT_SEARCH_PARAMETERS } from "@/constants/defaultSearchParams";

import { VolumesSchema } from "@/schemas/api/volumes";

export const fetchBooks = async (
  search: string | null = DEFAULT_SEARCH_PARAMETERS.search,
  category: string | null = DEFAULT_SEARCH_PARAMETERS.category,
  sorting: string | null = DEFAULT_SEARCH_PARAMETERS.sorting,
  pageParam: string | null = DEFAULT_SEARCH_PARAMETERS.page,
) => {
  const searchParam = search ?? DEFAULT_SEARCH_PARAMETERS.search;
  const res = await axios.get(import.meta.env.VITE_BOOKS_API_URL, {
    params: {
      q:
        category && category !== "all"
          ? `${searchParam}+subject:${category}`
          : searchParam,
      maxResults: import.meta.env.VITE_BOOKS_MAX_RESULTS,
      startIndex: import.meta.env.VITE_BOOKS_MAX_RESULTS * Number(pageParam),
      orderBy: sorting,
      key: import.meta.env.VITE_BOOKS_API_KEY,
    },
  });
  return VolumesSchema.parseAsync(res.data);
};
