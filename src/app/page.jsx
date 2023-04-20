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

  return (
    <div className="flex justify-center items-center flex-wrap gap-3">
      {data?.results?.map((dt, i) => (
        <Movies key={i} dt={dt}></Movies>
      ))}
    </div>
  );
};

export default Page;
