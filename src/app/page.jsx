import Movies from "@/components/Movies";
import React from "react";

const Page = async ({ searchParams }) => {
  const res = await fetch(
    `${process.env.BASE_API_URL}/3/${
      searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"
    }?api_key=${process.env.API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  const data = await res.json();

  return data?.results ? (
    <div className="flex justify-center items-center flex-wrap p-14 gap-3">
      {data?.results?.map((dt, i) => (
        <Movies key={i} dt={dt}></Movies>
      ))}
    </div>
  ) : (
    <div className="text-white text-xl flex justify-center">
      Not Found {searchParams.genre.toUpperCase()}
    </div>
  );
};

export default Page;
