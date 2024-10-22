import { CompanyLogo } from "./CompanyLogo";
import CustomButton from "./CustomButton";

export default function Header() {
  const handleClick = () => {};

  return (
    <div className="w-full min-h-[64px] flex items-center justify-between px-20 bg-header-primary border-b border-header-border">
      <CompanyLogo />

      <CustomButton title="Login" handlePress={handleClick} />
    </div>
  );
}
