import { icons } from "../constants";

export const CompanyLogo = () => {
  return (
    <div className="flex gap-2.5">
      <img src={icons.Logo} alt="Company Logo" className="w-[39px] h-[39px]" />
      <div className="flex flex-col justify-between">
        <p className="text-xl text-white leading-none">levitation</p>
        <p className="text-xs text-white leading-none">Infotech</p>
      </div>
    </div>
  );
};
