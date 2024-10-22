import { useLocation } from "react-router-dom";
import { CompanyLogo } from "./CompanyLogo";
import CustomButton from "./CustomButton";

export default function Header() {
  const history = useLocation();
  const pathname = history.pathname;

  const handleClick = () => {};

  return (
    <div className="w-full min-h-[64px] flex items-center justify-between px-20 bg-header-primary border-b border-header-border">
      <CompanyLogo />

      <CustomButton
        title={
          pathname === "/login" ? "Connecting People With Technology" : "Login"
        }
        handlePress={handleClick}
        otherStyles={`max-h-[41px] ${
          pathname === "/login" ? "text-button-primary bg-transparent border border-button-primary" : ""
        }`}
      />
    </div>
  );
}
