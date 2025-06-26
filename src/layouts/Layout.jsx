import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Layout = () => {
    return (
        <section className="flex min-h-screen bg-base-200">
            <Sidebar />
            <main className="p-4 px-2 xs:h-auto min-h-screen w-full">
                <Outlet />
            </main>
        </section>
    )
}

export default Layout