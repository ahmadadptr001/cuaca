import { useState } from "react";

import weather from "../assets/weather-bg.jpg";
import profile from "../assets/profile-bg.jpg";
import maps from "../assets/maps-bg.jpg";

const Landing = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <section
            className={`${
                activeIndex === 0
                    ? "xs:grid-cols-3 grid-rows-[1fr_1fr_1fr] xs:grid-rows-none"
                    : activeIndex === 1
                    ? "grid-rows-[2fr_1fr_1fr] xs:grid-rows-none xs:grid-cols-[5fr_1fr_1fr]"
                    : activeIndex === 2
                    ? "grid-rows-[1fr_2fr_1fr] xs:grid-rows-none xs:grid-cols-[1fr_5fr_1fr]"
                    : activeIndex === 3
                    ? "grid-rows-[1fr_1fr_2fr] xs:grid-rows-none xs:grid-cols-[1fr_1fr_5fr]"
                    : ""
            } xs:h-[100dvh] grid transition-all duration-500 text-white overflow-hidden`}
        >
            <div
                onTouchStart={() => setActiveIndex(1)}
                onMouseOver={() => setActiveIndex(1)}
                className="flex items-center justify-center p-10 py-8 relative group"
                style={{ background: `url(${maps}) center/cover no-repeat` }}
            >
                {/* backdrop */}
                <div className="absolute inset-0 bg-blue-800/15"></div>
                {/* teks side*/}
                <div
                    className=" z-2
                        absolute top-1/2 left-0 w-max -translate-y-1/2
                        -translate-x-[42%] rotate-90 group-hover:text-warning 
                        text-white px-2 py-1 font-medium duration-1000
                        whitespace-nowrap text-[20px] xs:text-[32px] group-focus-within:text-warning
                    "
                >
                    Interactive Map Explorer
                </div>
                {/* content */}
                <div className="grid grid-cols-1 z-4 h-full group-hover:delay-400 group-focus-within:opacity-100 opacity-0 duration-500 group-hover:opacity-100 text-white group-focus-within:text-warning group-hover:text-warning">
                    <div></div>
                    <div></div>
                    <div className="duration-1000 text-center pb-4 flex flex-col gap-5 justify-end">
                        <p className="text-3xl xs:text-5xl font-bold">Interactive Map Explorer</p>
                        <p className="text-white text-[.7rem] xs:text-base">Kenali sosok di balik aplikasi ini—latar belakang, keahlian, dan visi pembuatan proyek.</p>
                        <button className="text-sm w-full p-2 xs:p-4 rounded-box text-white mt-0 ring-3 ring-gray-50 cursor-pointer focus-within:bg-white focus-within:text-black hover:bg-white hover:text-black">
                            Explore
                        </button>
                    </div>
                </div>
            </div>
            <div
                onMouseOver={() => setActiveIndex(2)}
                className="flex items-center justify-center p-10 py-8 relative group"
                style={{ background: `url(${weather}) center/cover no-repeat` }}
            >
                {/* backdrop */}
                <div className="absolute inset-0 bg-blue-800/15"></div>
                {/* teks side*/}
                <div
                    className="z-2
                        absolute top-1/2 left-0 w-max -translate-y-1/2
                        -translate-x-[42%] rotate-90 group-hover:text-warning 
                        text-white px-2 py-1 font-medium duration-1000
                        whitespace-nowrap text-[20px] xs:text-[32px]
                    "
                >
                    Local Weather Forecast
                </div>
                {/* content */}
                <div className="grid grid-cols-1 z-4 h-full group-hover:delay-400 opacity-0 duration-500 group-hover:opacity-100 text-white group-hover:text-warning">
                    <div></div>
                    <div></div>
                    <div className="duration-1000 text-center pb-4 flex flex-col gap-5 justify-end">
                        <p className="text-3xl xs:text-5xl font-bold">Local Weather Forecast</p>
                        <p className="text-white text-[.7rem] xs:text-base">Kenali sosok di balik aplikasi ini—latar belakang, keahlian, dan visi pembuatan proyek.</p>
                        <button className="text-sm w-full p-2 xs:p-4 rounded-box text-white mt-0 ring-3 ring-gray-50 cursor-pointer hover:bg-white hover:text-black">
                            Explore
                        </button>
                    </div>
                </div>
            </div>
            <div
                onMouseOver={() => setActiveIndex(3)}
                className="flex items-center justify-center p-10 py-8 relative group"
                style={{ background: `url(${profile}) center/cover no-repeat` }}
            >
                {/* backdrop */}
                <div className="absolute inset-0 bg-blue-800/15 z-1"></div>
                {/* teks side*/}
                <div
                    className=" z-2
                        absolute top-1/2 left-0 w-max -translate-y-1/2
                        -translate-x-[42%] rotate-90 group-hover:text-warning 
                        text-white px-2 py-1 font-medium duration-1000
                        whitespace-nowrap text-[20px] xs:text-[32px]
                    "
                >
                    Meet the Author
                </div>

                {/* content */}
                <div className="grid grid-cols-1 z-4 h-full group-hover:delay-400 opacity-0 duration-500 group-hover:opacity-100 text-white group-hover:text-warning">
                    <div></div>
                    <div></div>
                    <div className="duration-1000 text-center pb-4 flex flex-col gap-5 justify-end">
                        <p className="text-3xl xs:text-5xl font-bold">Meet the Author</p>
                        <p className="text-white text-[.7rem] xs:text-base">Kenali sosok di balik aplikasi ini—latar belakang, keahlian, dan visi pembuatan proyek.</p>
                        <button className="text-sm w-full p-2 xs:p-4 rounded-box text-white mt-0 ring-3 ring-gray-50 cursor-pointer hover:bg-white hover:text-black">
                            Explore
                        </button>
                    </div>
                </div>      
            </div>
        </section>
    );
};

export default Landing;
