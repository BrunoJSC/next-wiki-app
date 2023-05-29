"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export function Search() {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setSearch("");
    router.push(`/${search}/`);
  }

  return (
    <form
      className="w-50 flex justify-center md:justify-between"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-white p-2 w-80 text-xl rounded-xl"
        placeholder="Search"
      />
      <button
        type="submit"
        className="p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold"
      >
        Rocket
      </button>
    </form>
  );
}
