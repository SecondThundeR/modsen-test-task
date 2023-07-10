import { FormEvent } from "react";
import { Outlet, useNavigate, useSearchParams } from "react-router-dom";

import { Header } from "../components/Header";

import { CATEGORIES } from "../constants/categories";
import { DEFAULT_SEARCH_PARAMETERS } from "../constants/defaultSearchParams";
import { SORTING } from "../constants/sorting";
import { useIsLoading } from "../hooks/useIsLoading";

const DEFAULT_CATEGORY = DEFAULT_SEARCH_PARAMETERS["category"];
const DEFAULT_SORT = DEFAULT_SEARCH_PARAMETERS["sorting"];

export function Root() {
  const [searchParams, setSearchParams] = useSearchParams();
  const isBooksLoading = useIsLoading(["books"]);
  const navigate = useNavigate();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const q = formData.get("q") as string;
    const category = formData.get("categories") as string;
    const sort = formData.get("sort") as string;

    navigate("/books");
    setSearchParams({ q, category, sort, page: "0" });
  };

  return (
    <div className="h-screen flex flex-col">
      <Header>
        <Header.Title>Search for books</Header.Title>
        <Header.ControlsWrapper onSubmit={onSubmit}>
          <Header.Search defaultValue={searchParams.get("q") || ""} isLoading={isBooksLoading} />
          <Header.SelectWrapper>
            <Header.Select
              name="categories"
              label="Categories"
              options={CATEGORIES}
              defaultValue={searchParams.get("category") || DEFAULT_CATEGORY}
            />
            <Header.Select
              name="sort"
              label="Sorting by"
              options={SORTING}
              defaultValue={searchParams.get("sort") || DEFAULT_SORT}
            />
          </Header.SelectWrapper>
        </Header.ControlsWrapper>
      </Header>
      <div className="flex flex-col items-center gap-4 w-full flex-grow">
        <Outlet />
      </div>
    </div>
  );
}
