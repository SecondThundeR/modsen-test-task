import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";

import { categories } from "./data/categories";
import { sorting } from "./data/sorting";

import Header from "./components/Header";
import BookCard from "./components/BookCard";

import { VolumesSchema } from "./schemas/api/volumes";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

const MAX_RESULTS = 30;
const ALERT_TEXT =
  "If you're sure the items should have appeared, try loading the page with a VPN, as the Google Books API may not show results in some regions (unfortunately)";

const fetchBooks = async (page: number = 0, search: string, category: string, sorting: string) => {
  const res = await axios.get("https://www.googleapis.com/books/v1/volumes", {
    params: {
      q: category !== "all" ? `${search}+subject:${category}` : search,
      maxResults: MAX_RESULTS,
      startIndex: MAX_RESULTS * page,
      orderBy: sorting,
      key: import.meta.env.VITE_BOOKS_API_KEY,
    },
  });
  return VolumesSchema.parseAsync(res.data);
};

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSort, setSelectedSort] = useState("relevance");
  const [currentPage, _] = useState(0);

  const { data, error, isError, isLoading, isRefetching, refetch } = useQuery({
    queryKey: ["books"],
    queryFn: () => fetchBooks(currentPage, searchValue, selectedCategory, selectedSort),
    enabled: false,
  });

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value);
  const onSelectCategory = (e: ChangeEvent<HTMLSelectElement>) => setSelectedCategory(e.target.value);
  const onSelectSort = (e: ChangeEvent<HTMLSelectElement>) => setSelectedSort(e.target.value);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    refetch();
  };

  return (
    <div className="h-screen">
      <Header>
        <Header.Title>Search for books</Header.Title>
        <Header.ControlsWrapper>
          <Header.Search
            value={searchValue}
            onChange={onChangeSearch}
            onSubmit={onSubmit}
            isLoading={isLoading || isRefetching}
          />
          <Header.SelectWrapper>
            <Header.Select
              label="Categories"
              options={categories}
              value={selectedCategory}
              onChange={onSelectCategory}
            />
            <Header.Select label="Sorting by" options={sorting} value={selectedSort} onChange={onSelectSort} />
          </Header.SelectWrapper>
        </Header.ControlsWrapper>
      </Header>
      <div className="p-4 flex flex-col items-center gap-4 w-full">
        {isError && (
          <div>
            <h1 className="text-error-content">Error occurred!</h1>
            <pre>{JSON.stringify(error, null, 4)}</pre>
          </div>
        )}
        {isLoading || isRefetching ? (
          <span className="loading loading-spinner loading-md"></span>
        ) : data ? (
          <>
            <div className="flex flex-col sm:w-1/3 gap-4 items-center">
              <h1 className="font-medium opacity-50">Found {data?.totalItems} results</h1>
              {data.totalItems === 0 && (
                <div className="alert alert-info">
                  <InformationCircleIcon className="h-6 w-6 stroke-current shrink-0" />
                  <span>{ALERT_TEXT}</span>
                </div>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {data !== undefined &&
                data.items?.map((item) => {
                  const volumeInfo = item.volumeInfo;
                  if (volumeInfo === undefined || volumeInfo === null) return null;
                  const { imageLinks, title, categories, authors } = volumeInfo;
                  return (
                    <BookCard
                      key={item.id}
                      imageUrl={imageLinks?.smallThumbnail}
                      title={title}
                      categories={categories}
                      authors={authors}
                    />
                  );
                })}
            </div>
          </>
        ) : (
          <h1 className="text-xl font-bold">Use search above to get books results</h1>
        )}
      </div>
    </div>
  );
}

export default App;
