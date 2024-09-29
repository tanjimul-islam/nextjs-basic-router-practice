"use client";

import { useSearchParams } from "next/navigation";

export default function SortProducts() {
  const searchParams = useSearchParams();

  function updateSorting(sortOrder) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", sortOrder);
    window.history.pushState(null, "", `?${params.toString()}`);
  }

  return (
    <div className="flex justify-center gap-4">
      <button
        className=" mt-6 rounded px-6 py-3 bg-blue-600 font-semibold text-white"
        onClick={() => updateSorting("asc")}
      >
        Sort Ascending
      </button>
      <button
        className="mt-6 rounded px-6 py-3 bg-blue-600 font-semibold text-white"
        onClick={() => updateSorting("desc")}
      >
        Sort Descending
      </button>
    </div>
  );
}
