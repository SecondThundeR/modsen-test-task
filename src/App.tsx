import { ChangeEvent, useState } from "react";

import { categories } from "./data/categories";
import { sorting } from "./data/sorting";

import Header from "./components/Header";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSort, setSelectedSort] = useState("relevance");

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
    </div>
  );
}

export default App;
