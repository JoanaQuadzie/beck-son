"use client";
import { useState } from "react";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const Search = () => {
  const [query, setQuery] = useState<string>("");
  const router = useRouter();

  return (
    <div className="py-2 flex items-center justify-between px-4 w-96 border bg-white rounded-lg shadow-xl">
      <input
        className="w-full focus:outline-none"
        type="text"
        placeholder="e.g design shirt..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <SearchIcon
        onClick={() => {
          router.push("/shirt?q=" + query);
        }}
      />
    </div>
  );
};

export default Search;
