import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { convert } from "../services/dateTOday";
import { BiGlobe } from "react-icons/bi";

const DetailForecast = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const data = location.state?.forecast;
    const [daySelected, setDaySelected] = useState(null);

    useEffect(() => {
        if (!data) {
            Swal.fire("Tidak dapat memuat data", "Data tidak ditemukan", "error");
            navigate("/weather");
        }
    }, []);

    const CardDay = ({ item, day }) => {
        return (
            <div className="card hover:shadow-accent hover:shadow-sm/50 bg-base-100 shadow-md p-3">
                <div className="card-body">
                    <div className="flex items-center justify-between">
                        <div className="badge badge-xs badge-success">{day}</div>
                        <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt="" />
                    </div>
                    <p className="text-center text-lg">{item.main.temp}◦C</p>
                </div>
                <p className="text-center">{item.dt_txt.split(" ")[1]}</p>
                <p className="text-center text-xs">{item.dt_txt.split(" ")[0]}</p>
            </div>
        );
    };
    return (
        <main>
            <section className="flex items-start sm:items-center gap-2 sm:flex-row flex-col-reverse">
                {/* header */}
                <div className="p-4 py-3 text-gray-500 bg-base-100 text-sm rounded-md flex items-center gap-1 w-fit flex-wrap">
                    <BiGlobe className="size-3" />
                    <span>{data.city.country}</span>
                    <span className="text-xs line-clamp-1">Pop. {data.city.population}</span>
                </div>

                {/* pilih hari */}
                <select className="select select-info" onChange={e => setDaySelected(e.target.value)}>
                    <option value="" disabled selected>
                        Pilih Hari
                    </option>
                    <option value="senin">Senin</option>
                    <option value="selasa">Selasa</option>
                    <option value="rabu">Rabu</option>
                    <option value="kamis">Kamis</option>
                    <option value="jumat">Jumat</option>
                    <option value="sabtu">Sabtu</option>
                    <option value="minggu">Minggu</option>
                </select>
            </section>

            {/* forecast harian */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3  gap-4">
                {data.list.map((item, index) => {
                    const day = convert(item.dt_txt);
                    if (daySelected) {
                        if (daySelected.toLowerCase() === day.toLowerCase()) {
                            return <CardDay item={item} day={day} />;
                        }
                    } else {
                        return <CardDay item={item} day={day} />;
                    }
                })}
            </div>
        </main>
    );
};

export default DetailForecast;
