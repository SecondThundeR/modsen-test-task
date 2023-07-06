import { ChangeEvent, useState } from "react";

import Header from "./components/Header";

import { OptionItem } from "./types/optionItem";

const categories = [
  {
    id: 1,
    value: "all",
    title: "All",
  },
  {
    id: 2,
    value: "art",
    title: "Art",
  },
  {
    id: 3,
    value: "biography",
    title: "Biography",
  },
  {
    id: 4,
    value: "computers",
    title: "Computers",
  },
  {
    id: 5,
    value: "history",
    title: "History",
  },
  {
    id: 6,
    value: "medical",
    title: "Medical",
  },
  {
    id: 7,
    value: "poetry",
    title: "Poetry",
  },
] satisfies OptionItem[];

const sorting = [
  {
    id: 1,
    value: "relevance",
    title: "Relevance",
  },
  {
    id: 2,
    value: "newest",
    title: "Newest",
  },
] satisfies OptionItem[];

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
