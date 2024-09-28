"use client";

import { usePathname } from "next/navigation";
import RegisteredNavbar from "./navbar/registered_navbar";
import NonRegisteredNavbar from "./navbar/non_registered_navbar";

export default function NavbarWrapper() {
    const pathname = usePathname();

    const excludedRoutes = ["/"];

    const isExcludedRoute = excludedRoutes.includes(pathname);

    return isExcludedRoute ? <NonRegisteredNavbar /> : <RegisteredNavbar />;
}