import { Car } from "@/type/Car";
import { getCarName, getTransmission } from "@/utils/cars";
import Image from "next/image";
import { useState } from "react";
import { CarStat } from "./CarStat";
import { getRentPrice } from "@/utils/getRentPrice";
import { generateCarImageUrl } from "@/utils/generateCarImageUrl";
import { Button } from "../Buttons/Button";
import { CarDetail } from "./CarDetail";

type CarCardProps = {
  car: Car;
};

export const CarCard = ({ car }: CarCardProps) => {
  const [favorite, setFavorite] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const url = generateCarImageUrl(car);
  return (
    <div
      className="flex flex-col bg-slate-100 p-4 w-full rounded hover:scale-105 transition-all cursor-pointer hover:bg-slate-50 hover:shadow-lg"
      onClick={() => setShowDetail(true)}
    >
      <div className="flex-between">
        <h5 className="text-lg font-bold whitespace-nowrap">
          {getCarName(car)}
        </h5>
        <Image
          src={`/assets/icons/heart-${favorite ? "filled" : "outline"}.svg`}
          alt="add to favorite"
          width={20}
          height={20}
          onClick={() => setFavorite(!favorite)}
          className="cursor-pointer hover:scale-105"
        />
      </div>
      <div className="relative flex items-end">
        <span className="text-xs absolute top-0 left-0 font-bold">$</span>
        <h4 className="ml-2 text-xl font-bold">{getRentPrice(car)}</h4>
        <p className="text-xs text-grey mb-1">/day</p>
      </div>
      <Image priority src={url} height={100} width={400} alt="car" />
      <div className="flex items-center justify-around">
        <CarStat
          icon="/assets/icons/steering-wheel.svg"
          value={car.transmission ? getTransmission(car.transmission) : null}
        />
        <CarStat
          icon="/assets/icons/tire.svg"
          value={car.cylinders ? `${car.cylinders} cylinders` : null}
        />
        <CarStat
          icon="/assets/icons/gas.svg"
          value={car.highway_mpg ? `${car.highway_mpg} MPG` : null}
        />
      </div>
      {showDetail && (
        <CarDetail
          isOpen={showDetail}
          car={car}
          handleClose={() => setShowDetail(false)}
        />
      )}
    </div>
  );
};
