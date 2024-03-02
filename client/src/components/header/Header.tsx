import { Outlet } from "react-router-dom";
import Logo from "./inner/Logo";
import Button from "../default/DefaultButton";
import SearchInput from "./inner/SearchField";

export default function Header() {
    return (
      <>
        <header className="sticky top-0 shadow-md h-16">
            <div className="flex justify-between items-center w-full h-full">
                <Logo />
                <div className="mr-64 space-x-4">
                    <Button text="Current weather" link="/current"/>
                    <Button text="About" link="/about"/>
                </div>
                <div className="mr-4 space-x-4">
                    <SearchInput />
                </div>
            </div>
        </header>
        <Outlet />
      </>
    );
  }
