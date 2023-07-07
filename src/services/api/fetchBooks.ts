import axios from "axios";

import { DEFAULT_SEARCH_PARAMETERS } from "../../data/defaultSearchParams";

import { VolumesSchema } from "../../schemas/api/volumes";

export const fetchBooks = async (
  search: string | null = DEFAULT_SEARCH_PARAMETERS["search"],
  category: string | null = DEFAULT_SEARCH_PARAMETERS["category"],
  sorting: string | null = DEFAULT_SEARCH_PARAMETERS["sorting"],
  page: string | null = DEFAULT_SEARCH_PARAMETERS["page"],
) => {
  const res = await axios.get(import.meta.env.VITE_BOOKS_API_URL, {
    params: {
      q: category !== "all" ? `${search}+subject:${category}` : search,
      maxResults: import.meta.env.VITE_BOOKS_MAX_RESULTS,
      startIndex: import.meta.env.VITE_BOOKS_MAX_RESULTS * Number(page),
      orderBy: sorting,
      key: import.meta.env.VITE_BOOKS_API_KEY,
    },
  });
  return VolumesSchema.parseAsync(res.data);
};
