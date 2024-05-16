import { Link } from "react-router-dom";
import { Logo } from "../assets";
import { links } from "../constant";

const Header = () => {
  return (
    <div className="w-full bg-transparent fixed py-[15px] px-[23px]">
      <div className="container flex items-center justify-between rounded-[40px] p-4 bg-white">
        <Link
          to={"/"}
          className="flex items-center">
          <img
            src={Logo}
            className="w-8 md:w-10"
          />
          <h1 className="text-[20px] md:text-[22px] font-bold text-gray-700">
            WaterTracking
          </h1>
        </Link>
        <div className="flex items-center gap-6">
          {links.map((link, i) => {
            return (
              <Link
                to={link.href}
                key={link.label + "_header"}
                className={`${
                  i === 0
                    ? "text-[15px] md:text-[18px] text-gray-900 duration-300 transition-all"
                    : "text-[15px] md:text-[18px] text-white py-2 px-5 rounded-full bg-[#5199fd] hover:bg-[#639ef0] duration-300 transition-all"
                }`}>
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
