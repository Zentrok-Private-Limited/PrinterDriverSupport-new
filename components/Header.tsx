"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { PRINTERS_DATA } from "@/data/printersData";

export default function Header() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown if clicked outside the component container
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter dynamic results list when typing occurs
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setActiveIndex(-1);

    if (value.trim().length > 0) {
      const filtered = PRINTERS_DATA.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase()),
      ).slice(0, 8); // Limits UI display view to top 8 entries for scannability
      setSuggestions(filtered);
      setShowDropdown(true);
    } else {
      setSuggestions([]);
      setShowDropdown(false);
    }
  };

  const handleSelection = (productName: string) => {
    setQuery(productName);
    setShowDropdown(false);
    // Standardizes alphanumeric parameters for web routing paths
    const urlSafeName = encodeURIComponent(
      productName.trim().replace(/\s+/g, "-"),
    );
    router.push(`/hp/download/${urlSafeName}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showDropdown) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) =>
        prev < suggestions.length - 1 ? prev + 1 : prev,
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeIndex >= 0 && activeIndex < suggestions.length) {
        handleSelection(suggestions[activeIndex]);
      } else if (query.trim() !== "") {
        handleSelection(query);
      }
    } else if (e.key === "Escape") {
      setShowDropdown(false);
    }
  };

  const openChat = () => {
    if (typeof window !== "undefined" && window.jivo_api) {
      window.jivo_api.open();
    }
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b border-gray-200 font-subheading font-normal">
      {/* Brand Bar */}
      <div className="w-full mx-auto px-8 h-20 flex items-center justify-center gap-6">
        {/* Logo
        <div className="shrink-0 cursor-pointer" onClick={() => router.push("/")}>
          <img src="/logo.png" alt="logo" className="h-15 w-45" />
        </div> */}

        {/* COMBINED SEARCH BAR + ASK BUTTON ROW */}
        <div
          ref={dropdownRef}
          className="flex-1 border max-w-6xl flex items-center gap-4 relative"
        >
          {/* Input Box Wrapper */}
          <div className="relative flex-1 flex items-center border border-gray-400 bg-white px-4 h-11 shadow-sm rounded-sm focus-within:border-gray-600 transition-colors">
            <input
              type="text"
              value={query}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onFocus={() => query.trim().length > 0 && setShowDropdown(true)}
              placeholder="Search Driver Guides Enter a printer name..."
              className="w-full pr-10 text-base text-gray-800 placeholder-gray-400 focus:outline-none font-subheading font-normal bg-transparent"
            />
            <Search
              onClick={() => query.trim() !== "" && handleSelection(query)}
              className="absolute right-4 text-gray-500 w-5 h-5 cursor-pointer stroke-2 hover:text-black transition-colors"
            />
          </div>

          {/* Connected Button */}
          <button
            onClick={() => {
              openChat();
              if (query.trim()) {
                handleSelection(query);
              }
            }}
            className="bg-[#111828] text-white px-7 h-11 text-base font-medium rounded-sm hover:bg-[#2C5EB0] transition-colors font-heading flex items-center justify-center shrink-0"
          >
            Ask Us
          </button>

          {/* DYNAMIC AUTOCOMPLETE FLOATING SEARCH BOX */}
          {showDropdown && suggestions.length > 0 && (
            <div className="absolute top-11 left-0 w-full max-w-134 bg-white border border-gray-200 shadow-xl rounded-md overflow-hidden z-50 animate-in fade-in duration-100">
              <ul className="py-1.5 max-h-80 overflow-y-auto">
                {suggestions.map((item, index) => (
                  <li
                    key={item}
                    onClick={() => handleSelection(item)}
                    onMouseEnter={() => setActiveIndex(index)}
                    className={`px-5 py-3 text-[15px] cursor-pointer flex items-center justify-between transition-colors ${
                      index === activeIndex
                        ? "bg-gray-100 text-blue-600 font-medium"
                        : "text-gray-700"
                    }`}
                  >
                    <span>{item}</span>
                    <ArrowRight className="text-[8px] opacity-40 font-mono text-blue-600" />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
