"use client";

import FloatingChatbot from "./floatingChatbot";
import { usePathname } from "next/navigation";

export default function FloatingChatbotWrapper() {
    const pathname = usePathname();

    const excludedRoutes = ["/login", "/create-complaint"];

    const isExcludedRoute = excludedRoutes.includes(pathname);

    return isExcludedRoute ? null : <FloatingChatbot />;
}