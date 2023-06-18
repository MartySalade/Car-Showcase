import Image from "next/image";

type CarStatProps = {
  icon: string;
  value: string | null;
};

export const CarStat = ({ icon, value }: CarStatProps) => {
  if (value === null) return null;
  return (
    <div className="flex flex-col items-center gap-1">
      <Image src={icon} height={17} width={17} alt={value} />
      <p className="text-sm text-grey">{value}</p>
    </div>
  );
};
