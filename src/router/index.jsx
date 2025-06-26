import { Route, Routes } from "react-router-dom"
import Landing from "../pages/Landing"
import Layout from "../layouts/Layout"
import Weather from "../pages/Weather"
import Maps from "../pages/Maps"
import About from "../pages/About"
import DetailForecast from "../pages/DetailsForecast"

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route element={<Layout />}>
                <Route path="/maps" element={<Maps />}></Route>
                <Route path="/weather" element={<Weather />}></Route>
                <Route path="/weather/details" element={<DetailForecast />}></Route>
                <Route path="/about-me" element={<About />}></Route>
            </Route>
        </Routes>
    )
}