import React, { useState } from "react";

interface SearchBarProps {
  fetchData: (title: string) => void;
}

const SearchBar = ({ fetchData }: SearchBarProps) => {
  const [query, setQuery] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    e.preventDefault();
  };

  const handleClick = () => {
    fetchData(query);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a movie..."
        onChange={handleChange}
        value={query}
      />
      <button onClick={handleClick}>Search</button>
    </div>
  );
};

export default SearchBar;
