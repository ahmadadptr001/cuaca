import "./App.css";
import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css";

import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router";

const App = () => {
    return (
        <BrowserRouter>
            <AppRouter></AppRouter>
        </BrowserRouter>
    );
};

export default App;
