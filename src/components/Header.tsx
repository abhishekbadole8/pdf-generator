import { useLocation, useNavigate } from "react-router-dom";
import { CompanyLogo } from "./CompanyLogo";
import CustomButton from "./CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { logout } from "../redux/userSlice";

export default function Header() {
  const history = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const pathname = history.pathname;

  const isLoggedIn = useSelector((state: RootState) => state.user.token);

  const handleClick = () => {
    if (isLoggedIn) {
      dispatch(logout());
    } else if (pathname === "/login") {
      navigate("/register");
    } else if (pathname === "/register" || pathname === "/") {
      navigate("/login");
    }
  };

  return (
    <div className="w-full min-h-[64px] flex items-center justify-between px-20 bg-header-primary border-b border-header-border">
      <CompanyLogo />

      <CustomButton
        title={
          pathname === "/login"
            ? "Connecting People With Technology"
            : isLoggedIn
            ? "Logout"
            : "Login"
        }
        handlePress={handleClick}
        otherStyles={`max-h-[41px] ${
          pathname === "/login"
            ? "text-button-primary bg-transparent border border-button-primary"
            : ""
        }`}
      />
    </div>
  );
}
