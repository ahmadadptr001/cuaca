import { BsArrowDown } from "react-icons/bs";
import cloud from "../assets/cloud.webp";
import { useNavigate } from "react-router-dom";
import LandingNavigation from "../components/LandingNavigation";
import Swal from "sweetalert2";

export default function Landing() {
    const navigate = useNavigate();

    const handleLocation = () => {
        if (navigator.geolocation) {
            try {
                navigator.geolocation.getCurrentPosition(
                    pos => {
                        const latlng = [pos.coords.latitude, pos.coords.longitude];
                        localStorage.setItem("lokasi-saya", JSON.stringify(latlng));
                        Swal.fire("Berhasil mendapatkan lokasi", "", "success");
                        navigate("/weather");
                    },
                    err => {
                        Swal.fire("Gagal Mendapatkan Lokasi", "Anda harus memberi izin akses lokasi terlebih dahulu", "error");
                    }
                );
            } catch (err) {
                Swal.fire("Lokasi tidak berhasil didapatkan", "", "error");
            }
        } else {
            alert("browser anda tidak mendukung fitur lokasi ini");
        }
    };
    return (
        <div
            className="relative h-[100dvh]"
            style={{ background: `url(${cloud})`, backgroundAttachment: "fixed", backgroundSize: "cover", backgroundPosition: "bottom" }}
        >
            <LandingNavigation />
            <div className="absolute flex p-4 flex-col gap-2 text-center items-center justify-center inset-0 bg-black/80 text-white">
                <p className="text-xl">Don’t let the rain ruin your plans. Check the weather first!</p>
                <span>Simple. Fast. Accurate weather.</span>
                <span className="my-3 flex flex-col items-center text-sky-300">
                    Click To Continue <BsArrowDown />
                </span>
                <button className="capitalize btn btn-lg text-sm xs:text-base" onClick={handleLocation}>
                    i agree to get my location
                </button>
            </div>
        </div>
    );
}
