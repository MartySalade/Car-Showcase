import { CarStat } from "./CarStat";

export const CarSkeleton = () => {
  return (
    <div className="flex w-full flex-1 flex-col items-center">
      <div className="mt-12 w-full animate-pulse flex-row items-center justify-center space-x-1 rounded-xl border p-6 ">
        <div className="flex flex-col gap-4">
          <div className="h-6 w-11/12 rounded-md bg-gray-200 "></div>
          <div className="h-6 w-10/12 rounded-md bg-gray-100 "></div>
          <div className="h-[150px] w-full rounded-md bg-gray-100 "></div>
          <div className="flex items-center justify-around mt-2">
            <CarStat icon="/assets/icons/steering-wheel.svg" value={"..."} />
            <CarStat icon="/assets/icons/tire.svg" value={"..."} />
            <CarStat icon="/assets/icons/gas.svg" value={"..."} />
          </div>
        </div>
      </div>
    </div>
  );
};
