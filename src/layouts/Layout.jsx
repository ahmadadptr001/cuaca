import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Layout = () => {
    return (
        <section className="xs:p-4 flex min-h-screen bg-base-200">
            <Sidebar />
            <main className="p-4 xs:py-0 px-2.5 xs:h-auto min-h-screen w-full">
                <Outlet />
            </main>
        </section>
    )
}

export default Layout