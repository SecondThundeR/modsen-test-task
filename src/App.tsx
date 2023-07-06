import { ChangeEvent, useState } from "react";
import axios from "axios";
import { createZodFetcher } from "zod-fetch";

import { categories } from "./data/categories";
import { sorting } from "./data/sorting";

import Header from "./components/Header";
import { VolumesSchema } from "./schemas/api/volumes";
import { useQuery } from "react-query";

const fetcher = createZodFetcher(axios.get);

const fetchBooks = async () => {
  console.log(import.meta.env.GOOGLE_BOOKS_API_KEY);
  return await fetcher(VolumesSchema, "/volumes", {
    params: {
      q: "javascript",
      key: import.meta.env.GOOGLE_BOOKS_API_KEY,
      maxResults: 40,
    },
    baseURL: "https://www.googleapis.com/books/v1",
  });
};

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSort, setSelectedSort] = useState("relevance");
  const query = useQuery({
    queryKey: ["books"],
    queryFn: () => fetchBooks(),
    // enabled: false,
  });

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value);
  const onSelectCategory = (e: ChangeEvent<HTMLSelectElement>) => setSelectedCategory(e.target.value);
  const onSelectSort = (e: ChangeEvent<HTMLSelectElement>) => setSelectedSort(e.target.value);

  return (
    <div className="h-screen">
      <Header>
        <Header.Title>Search for books</Header.Title>
        <Header.ControlsWrapper>
          <Header.Search value={searchValue} onChange={onChangeSearch} />
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
      <pre>{JSON.stringify(query.data, null, 4)}</pre>
      <pre>{JSON.stringify(query.error, null, 4)}</pre>
    </div>
  );
}

export default App;
