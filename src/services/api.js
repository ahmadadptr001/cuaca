import axios from "axios";
import Swal from "sweetalert2";

export const getWeather = async (lat, lng) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${import.meta.env.VITE_OPENWEATHERMAP}&units=metric`;
    try {
        const response = await axios.post(url);
        return response.data;
    } catch (err) {
        Swal.fire("Gagal mendapatkan data", err.message, "error");
        return;
    }
};

export const getForecast = async (lat, lng) => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${import.meta.env.VITE_OPENWEATHERMAP}&units=metric`;
    try {
        const response = await axios.post(url);
        return response.data;
    } catch (err) {
        Swal.fire("Gagal mendapatkan data", err.message, "error");
        return;
    }
};
