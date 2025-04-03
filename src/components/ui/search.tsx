"use client";

import { useState } from "react";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const Search = () => {
  const [query, setQuery] = useState<string>("");
  const router = useRouter();

  return (
    <div className="h-12 flex items-center justify-center px-4 w-96 border bg-white rounded-lg shadow-xl">
      <input
        className="w-full focus:outline-none h-full"
        type="text"
        placeholder="e.g design shirt..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <SearchIcon
        className="text-gray-400"
        onClick={() => {
          router.push("/shirt?q=" + query);
        }}
      />
    </div>
  );
};

export default Search;
