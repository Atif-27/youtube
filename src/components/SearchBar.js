import React, { useEffect, useState } from "react";
import { SEARCH_API } from "../utils/constants";

import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [searchQuery, setSeachQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(
    function () {
      async function fetchSearchSuggestion() {
        if (searchQuery === "") {
          setShowSuggestions(false);
          return;
        }
        const res = await fetch(SEARCH_API + searchQuery);
        const data = await res.json();
        setSuggestions(data[1]);
      }
      const timer = setTimeout(() => {
        fetchSearchSuggestion();
      }, 200);

      return () => {
        clearTimeout(timer);
        setSuggestions([]);
      };
    },
    [searchQuery]
  );
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!searchQuery) return;
    navigate(`/results?search_query=${searchQuery}`);
    setShowSuggestions(false);
  }
  function handleSuggestionClick(s) {
    setSeachQuery(s);
    navigate(`/results?search_query=${s}`);
    setShowSuggestions(false);
  }
  return (
    <>
      <div className="relative">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="w-1/2 border border-gray-300  p-2 px-5 rounded-l-full "
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSeachQuery(e.target.value)}
            onFocus={() => {
              setShowSuggestions(true);
            }}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          />
          <button className="p-2 px-5 rounded-r-full border bg-gray-100 border-gray-300 border-l-0">
            🔍
          </button>
        </form>

        <div className="absolute top-full w-[49.5%] left-[23%] bg-white text-left shadow-md rounded-md border border-gray-100 ">
          <ul className="">
            {showSuggestions &&
              suggestions &&
              suggestions.map((s) => (
                <li
                  key={s}
                  className="shadow-sm py-2 px-3 hover:bg-gray-50 duration-100"
                  onClick={() => handleSuggestionClick(s)}
                >
                  🔍 {s}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}
