import { Outlet } from "react-router-dom";

import { Header } from "@/components/Header";

import { CATEGORIES } from "@/constants/categories";
import { SORTING } from "@/constants/sorting";

import { useIsLoading } from "@/hooks/useIsLoading";
import { useHeaderSearch } from "@/hooks/useHeaderSearch";

export function Root() {
  const { searchParam, categoryParam, sortParam, onSubmit } = useHeaderSearch();
  const isBooksLoading = useIsLoading(["books"]);

  return (
    <div className="h-screen flex flex-col">
      <Header>
        <Header.Title>Search for books</Header.Title>
        <Header.ControlsWrapper onSubmit={onSubmit}>
          <Header.Search defaultValue={searchParam} isLoading={isBooksLoading} />
          <Header.SelectWrapper>
            <Header.Select name="categories" label="Categories" options={CATEGORIES} defaultValue={categoryParam} />
            <Header.Select name="sort" label="Sorting by" options={SORTING} defaultValue={sortParam} />
          </Header.SelectWrapper>
        </Header.ControlsWrapper>
      </Header>
      <div className="flex flex-col items-center gap-4 w-full flex-grow p-4">
        <Outlet />
      </div>
    </div>
  );
}
