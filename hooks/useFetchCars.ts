import { Car } from "@/type/Car";
import { SearchParam } from "@/type/SearchParam";
import { axiosInstance } from "@/utils/axios";
import { useQuery } from "@tanstack/react-query";

async function getCars(params: SearchParam) {
  if (!params.model && !params.make) {
    params.make = "audi";
  }
  if (!params.limit) params.limit = 10;
  const options = {
    method: "GET",
    url: "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
    params,
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    },
  };

  return axiosInstance.request(options).then((res) => res.data);
}

export const useFetchCars = (
  params: SearchParam
): {
  data: Car[];
  isLoading: boolean;
  error: unknown;
} => {
  const { limit, model, make, fuel, year } = params;
  const { data, isLoading, error } = useQuery({
    queryKey: ["fetch/cars", limit, model, make, fuel, year],
    queryFn: () => getCars(params),
  });
  return { data, isLoading, error };
};
