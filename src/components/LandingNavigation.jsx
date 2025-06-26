import { RxAvatar } from "react-icons/rx";
import logo from "../assets/logo.png";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";

const LandingNavigation = () => {
    return (
        <div className="navbar fixed px-5 py-2 sticky-top w-full z-[1000] text-white">
            <div className="flex-1">
                <img src={logo} alt="gambar logo" className="sm:w-45 w-40 objcet-cover" />
            </div>
            <div className="dropdown dropdown-left">
                <button className="font-extrabold cursor-pointer rounded-full btn btn-primary flex items-center gap-1" role="button">
                    Menu <HiMenuAlt3 className="size-6"/>
                </button>
                <ul className="dropdown-content w-50 me-1 pt-3 menu bg-gray-700 rounded-box">
                    <div className="flex-none flex justify-end items-center gap-3">
                        <button className="btn btn-accent btn-outline">Sign in</button>
                        <button className="btn btn-accent">Sign up</button>
                    </div>
                    <div className="flex items-center gap-1 justify-end border-gray-500 mt-5 pt-2 border-t-1">
                        <RxAvatar className="size-7 text-gray-200" />
                        <span>User@example.com</span>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default LandingNavigation;
