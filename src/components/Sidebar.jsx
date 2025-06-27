import { TiWeatherDownpour } from "react-icons/ti";
import logo_no_word from "../assets/logo-no-word.png";
import { HiInformationCircle } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { LiaMapSolid } from "react-icons/lia";
import { RxArrowTopLeft } from "react-icons/rx";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { useEffect, useState } from "react";

const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [lastScroll, setLastScroll] = useState(0);

    // handle show and hide scorll-y sidebar bottom
    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            if (currentScroll < lastScroll) {
                setShowSidebar(false);
            } else {
                setShowSidebar(true);
            }

            setLastScroll(currentScroll);
            console.log("berhasil di set")
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScroll]);

    return (
        <section
            id="sidebar-right"
            className={`xs:h-screen fixed ${showSidebar ? "bottom-0" : "-bottom-24"} transition-all duration-500 z-20 xs:sticky xs:top-0 w-full xs:w-auto`}
        >
            <div className="shdaow-md rounded-xl xs:xs:w-18 w-full bg-base-300 xs:bg-base-100 p-4 xs:h-full flex xs:flex-col gap-1 text-[.6rem] items-end xs:items-center justify-around xs:justify-start">
                <div className="hidden xs:block">
                    <img src={logo_no_word} alt="gambar logo" className="w-full object-cover" />
                </div>
                <NavLink
                    to="/maps"
                    className="flex xs:mt-10 rounded-full xs:rounded-none flex-col gap-1 xs:w-18 hover:bg-accent items-center hover:cursor-pointer p-4 pb-3 xs:pb-4"
                    style={({ isActive }) => ({ background: isActive ? "var(--color-accent)" : "transparent" })}
                >
                    <LiaMapSolid className="size-6" />
                    <span>Maps</span>
                </NavLink>
                <NavLink
                    to="/weather"
                    className="flex flex-col  items-center gap-1 xs:outline-none xs:hover:bg-accent xs:w-18 xs:hover:scale-100 xs:rounded-none xs:hover:shadow-none outline-2 p-4 rounded-full hover:shadow-accent hover:shadow-lg/70 cursor-pointer hover:scale-101"
                    style={({ isActive }) => ({ background: isActive ? "var(--color-accent)" : "transparent" })}
                >
                    <TiWeatherDownpour className="size-7" />
                    <span>Weather</span>
                </NavLink>
                <NavLink
                    to="/about-me"
                    className="flex rounded-full xs:rounded-none flex-col gap-1 xs:w-18 hover:bg-accent items-center hover:cursor-pointer p-4 pb-3 xs:pb-4"
                    style={({ isActive }) => ({ background: isActive ? "var(--color-accent)" : "transparent" })}
                >
                    <HiInformationCircle className="size-6" />
                    <span>About</span>
                </NavLink>
            </div>
        </section>
    );
};

export default Sidebar;
