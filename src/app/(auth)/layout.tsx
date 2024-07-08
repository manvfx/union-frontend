import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: "Union Admin Login",
    description: "Union Admin Dashboard",
};

interface AuthLayoutProps {
    children: React.ReactNode;
}

export default async function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <section className="min-h-screen flex gap-16 flex-col justify-center items-center">
            <div className="flex flex-col gap-4 items-center">
                <h1 className="text-4xl md:text-5xl font-bold">Admin Dashboard</h1>
                <p className="text-lg">Login to access the dashboard</p>
            </div>
            <Suspense>{children}</Suspense>
        </section>
    );
}