import { ChangeEvent, useState } from "react";
import axios from "axios";

import { categories } from "./data/categories";
import { sorting } from "./data/sorting";

import Header from "./components/Header";
import { VolumesSchema } from "./schemas/api/volumes";
import { useQuery } from "react-query";

const fetchBooks = async () => {
  const res = await axios.get("https://www.googleapis.com/books/v1/volumes", {
    params: {
      q: "javascript",
      maxResults: 40,
      key: import.meta.env.VITE_BOOKS_API_KEY,
    },
  });
  return VolumesSchema.parseAsync(res.data);
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
