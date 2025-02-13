import { useState } from "react";

type Item = {
  id: number;
  name: string;
};

type SearchProps = {
  data: Item[];
};

const Search = ({ data }: SearchProps) => {
  const [query, setQuery] = useState<string>("");

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 border rounded-md"
      />
      <ul className="mt-2">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <li key={item.id} className="p-2 border-b">
              {item.name}
            </li>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </ul>
    </div>
  );
};

export default Search;
