import { Outlet } from "react-router-dom";
import Logo from "./inner/Logo";
import Button from "../ui/DefaultButton";
import SearchInput from "./inner/SearchField";

export default function Header() {
    return (
      <>
        <header className="sticky top-0 shadow-md h-[8vh] bg-white">
            <div className="flex items-center w-full h-full">
                <div className="flex items-center space-x-4">
                    <div className="ml-4 w-1/5">
                        <Logo />
                    </div>    
                    <Button link="/current">Current weather</Button>
                    <Button link="/about">About</Button>
                </div>
                <div className="w-3/6 space-x-4 mr-4">
                    <SearchInput />
                </div>
            </div>
        </header>
        <Outlet />
      </>
    );
  }
