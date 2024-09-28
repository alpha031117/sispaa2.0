"use client";

import FloatingChatbot from "./floatingChatbot";
import { usePathname } from "next/navigation";

export default function FloatingChatbotWrapper() {
    const pathname = usePathname();

    const excludedRoutes = ["/login", "/create-complaint"];

    const isLoginRoute = excludedRoutes.includes(pathname);

    return !isLoginRoute ? <FloatingChatbot /> : null;
}