import {
    LayoutDashboardIcon,
    Users,
    UserCheck,
    Activity,
    Calendar,
} from "lucide-react";
import { ReactElement } from "react";

export const sideBarLinks: {
    name: string;
    href: string;
    icon: ReactElement;
}[] = [
        {
            name: "dashboard",
            href: "/dashboard",
            icon: <LayoutDashboardIcon />,
        },
        { name: "users", href: "/dashboard/users", icon: <Users /> },
        { name: "settings", href: "/dashboard/settings", icon: <UserCheck /> },
        { name: "profile", href: "/dashboard/profile", icon: <Activity /> },
    ];