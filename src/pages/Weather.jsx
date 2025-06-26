import { useEffect, useState } from "react";
import { getForecast, getWeather } from "../services/api";
import Swal from "sweetalert2";
import { BiCloud, BiUserCircle, BiWind } from "react-icons/bi";
import { BsArrowRight, BsInfoCircle } from "react-icons/bs";
import { WiRain } from "react-icons/wi";
import { useNavigate } from "react-router-dom";

const Weather = () => {
    const navigate = useNavigate();
    const [dataWeather, setDataWeather] = useState(null);
    const [dataForecast, setDataForecast] = useState(null);
    const [login, setLogin] = useState(null);

    useEffect(() => {
        const latlng = JSON.parse(localStorage.getItem("lokasi-saya"));

        if (!latlng) {
            Swal.fire("Silahkan Izinkan lokasi anda terlebih dahulu", "", "error");
            navigate("/");
            return;
        }

        const lat = latlng[0];
        const lng = latlng[1];

        (async () => {
            const result_data = await getWeather(lat, lng);
            const forecast_data = await getForecast(lat, lng);
            setDataWeather(result_data);
            setDataForecast(forecast_data);
        })();
    }, []);

    return (
        <section id="weather" className="grid grid-cols-1 sm:grid-cols-[2fr_1fr] gap-3">
            {dataWeather && dataForecast && (
                <div>
                    <div className="bg-base-100 justify-between p-3 flex items-center gap-1 rounded-box w-full shadow-md">
                        <div className="flex items-center gap-1 text-gray-400">
                            <BiUserCircle />
                            <span className="text-xs">{login ? login.username : "user@example.com"}</span>
                        </div>
                        <div>
                            <div className="status status-xl status-error"></div>
                            <div className="status status-lg status-info ms-0.5"></div>
                            <div className="status status-md ms-0.5 status-success"></div>
                        </div>
                    </div>

                    {/* ini adalah tampilan informasi untuk cuaca di daerah user */}
                    <div className="p-4 rounded-box bg-base-100 items-center mt-4 card card-side shadow-md">
                        <div className="card-body">
                            <div>
                                <div className="flex items-center gap-1 flex-wrap">
                                    <h2 className="card-title">{dataWeather.name}</h2>
                                    <img src={`https://openweathermap.org/img/wn/${dataWeather.weather[0].icon}.png`} alt="" className="object-contain" />
                                </div>
                                <span className="text-info">{dataWeather.weather[0].description}</span>
                                <p className="text-2xl">{dataWeather.main.temp}◦C</p>
                            </div>
                        </div>
                        <div className="me-4">
                            <p>status:</p>
                            <span className="font-semibold text-primary text-xl">- {dataWeather.weather[0].main}</span>
                        </div>
                    </div>

                    {/* ini adalah tampilan informasi untuk cuaca di daerah user waktu waktu tertentu*/}
                    <div className="p-4 rounded-box bg-base-100 mt-4 shadow-md">
                        <p className="mb-3">Today Forecast</p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:grid-cols-4 h-75 overflow-auto">
                            {dataForecast.list.map((item, index) => {
                                const dateList = item.dt_txt.split(" ");
                                return (
                                    <div key={index} className="p-4 flex flex-col items-center gap-3 bg-base-200 text-center rounded-box ">
                                        <div className="text-xs">
                                            <p>{dateList[0]}</p>
                                            <p>{dateList[1]}</p>
                                        </div>
                                        <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt="gambar cuaca" />
                                        <p className="text-gray-500">{item.main.temp}◦C</p>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="flex justify-end p-3">
                            <button
                                type="button"
                                onClick={() => navigate("/weather/details", {
                                    state : {
                                        forecast: dataForecast
                                    }
                                })}
                                className="underline text-info cursor-pointer text-xs flex items-center gap-1 underline-offset-2"
                            >
                                Details <BsArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {dataWeather && dataForecast && (
                <div className="p-4 bg-base-100">
                    <p className="font-semibold flex items-center gap-1">
                        <BsInfoCircle /> <span className="line-clamp-1">More Information today</span>
                    </p>

                    <div className="mt-4">
                        <div className="card bg-accent/25 p-3">
                            <div className="card-body">
                                <p>Rain</p>
                                <div className="flex items-center gap-1">
                                    <WiRain className="size-7" />
                                    <span className="text-xl">{dataWeather.rain ? Object.values(dataWeather.rain)[0] : "-"} Hours</span>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-primary/25 p-3 mt-2">
                            <div className="card-body">
                                <p>Wind</p>
                                <div className="flex items-center gap-1">
                                    <BiWind className="size-6" />
                                    <span className="text-xl">{Object.values(dataWeather.wind)[0]} m/s</span>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-error/40 p-3 mt-2">
                            <div className="card-body">
                                <p>Clouds</p>
                                <div className="flex items-center gap-1">
                                    <BiCloud className="size-5" />
                                    <span className="text-xl">{Object.values(dataWeather.clouds)[0]}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Weather;
