import { Outlet } from "react-router-dom";
import Logo from "./inner/Logo";
import SearchInput from "./inner/SearchField";
import CustomNavLink from "../ui/HeaderNavLink";

export default function Header() {
    return (
      <>
        <header className="sticky top-0 shadow-md h-[8vh] w-screen bg-white">
            <div className="flex justify-between items-center h-full">
                <div className="flex items-center space-x-4 w-fit">
                    <div className="ml-4">
                        <Logo />
                    </div>    
                    <CustomNavLink link="/current">Current weather</CustomNavLink>
                    <CustomNavLink link="/about">About</CustomNavLink>
                </div>
                <div className="space-x-4 mr-4">
                    <SearchInput />
                </div>
            </div>
        </header>
        <Outlet />
      </>
    );
  }
