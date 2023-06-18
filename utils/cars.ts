import { Car } from "@/type/Car";

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const getTransmission = (transmission: string): string => {
  return transmission === "a" ? "Automatic" : "Manual";
};

export const getCarName = (car: Car): string => {
  const carName = `${capitalizeFirstLetter(car.make)} ${capitalizeFirstLetter(
    car.model
  )}`;
  if (carName.length > 25) {
    return `${carName.slice(0, 25)}...`;
  }
  return carName;
};
