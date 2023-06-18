"use client";

import { Button } from "@/components/Buttons/Button";
import { CarCard } from "@/components/Car/CarCard";
import { CarSkeleton } from "@/components/Car/CarSkeleton";
import { Filter } from "@/components/Filter";
import { Hero } from "@/components/Hero";
import { SearchBar } from "@/components/Search/Searchbar";
import { fuels, yearsOfProduction } from "@/data";
import { useFetchCars } from "@/hooks/useFetchCars";
import { SearchParam } from "@/type/SearchParam";
import { setQueryParam } from "@/utils/setQueryParam";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

type HomeProps = {
  searchParams: SearchParam;
};

export default function Home({ searchParams }: HomeProps) {
  const catalogRef = useRef<HTMLDivElement>(null);
  const searchParameters = useSearchParams();
  const router = useRouter();
  const params = {
    model: searchParams.model,
    make: searchParams.make,
    year: searchParams.year,
    fuel: searchParams.fuel,
    limit: searchParams.limit,
  };

  useEffect(() => {
    if (
      params.model ||
      params.make ||
      params.fuel ||
      params.year ||
      params.limit
    ) {
      console.log(params.model, params.make, params.fuel);
      setTimeout(() => {
        catalogRef.current?.scrollIntoView();
      }, 0);
    }
  }, [searchParameters]);

  const { data: cars, isLoading, error } = useFetchCars(params);
  let skeletonCards = Array(10).fill(0);

  const handleScroll = () => {
    if (catalogRef.current) {
      catalogRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleShowMoreClick = () => {
    const newPathName = setQueryParam("limit", "30");
    router.push(newPathName);
  };

  return (
    <main className="w-full">
      <Hero handleClick={handleScroll} />
      <div
        ref={catalogRef}
        className="flex w-full flex-col lg:flex-row justify-center gap-4 xl:mt-0 mt-16 md:mt-24 mb-16"
      >
        <div
          className="overflow-x-hidden w-full flex flex-col gap-4 px-2"
          id="carCatalogue"
        >
          <h3 className="ml-2 text-2xl font-bold">Car catalogue</h3>
          <div className="flex items-center flex-wrap gap-4">
            <SearchBar />
            <div className="w-full flex items-center gap-2">
              <Filter type="Fuel" values={fuels} />
              <Filter type="Year" values={yearsOfProduction} />
            </div>
          </div>
          {error ? (
            <p className="mt-4 text-center text-grey">
              Error occurs, please try again later.
            </p>
          ) : cars && cars.length === 0 ? (
            <p className="mt-4 text-grey text-center font-bold text-lg">
              No cars found for your request
            </p>
          ) : (
            <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-8">
              {isLoading ? (
                skeletonCards.map((_, index: number) => (
                  <CarSkeleton key={index} />
                ))
              ) : (
                <>
                  {cars &&
                    cars.map((car, index) => <CarCard key={index} car={car} />)}
                </>
              )}
            </div>
          )}
          <div className="w-full flex-center mt-4">
            <Button
              disabled={
                (params.limit && params.limit >= 30) ||
                !cars ||
                cars.length === 0
              }
              text="Show more"
              onClick={handleShowMoreClick}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
