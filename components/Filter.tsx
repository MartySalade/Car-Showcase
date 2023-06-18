import { setQueryParam } from "@/utils/setQueryParam";
import { useRouter } from "next/navigation";

type FilterProps = {
  type: string;
  values: { title: string; value: string }[];
};

export const Filter = ({ type, values }: FilterProps) => {
  const router = useRouter();

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const newPathName = setQueryParam(type.toLowerCase(), value.toLowerCase());
    router.push(newPathName);
  };

  return (
    <select
      placeholder={type}
      className="text-sm p-2 bg-white rounded-xl border-2 border-grey"
      onChange={handleFilterChange}
    >
      {values.map((value) => (
        <option key={value.value} value={value.value}>
          {value.title}
        </option>
      ))}
    </select>
  );
};
