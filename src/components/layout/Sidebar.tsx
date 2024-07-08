"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { sideBarLinks } from "@/data/links";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Sidebar() {
    const [toggle, setToggle] = useState<boolean>(false);
    const pathName = usePathname();

    return (
        <>
            <Menu
                size={30}
                className="cursor-pointer absolute left-[22px] top-[18px] xl:hidden z-[2]"
                onClick={() => setToggle((prev) => !prev)}
            />
            <span
                onClick={() => setToggle((prev) => !prev)}
                className={`absolute inset-0 w-screen h-screen bg-black cursor-pointer 
          ${toggle ? "block" : "hidden"} xl:hidden z-[2]`}
            />
            <div
                className={`absolute z-[2] xl:relative h-screen transition-all duration-500 ease-in-out bg-black text-white px-2 py-10 w-[300px] flex flex-col justify-between ${toggle ? "left-[-0%]" : "left-[-100%] "
                    } xl:left-[0%]`}
            >
                <X
                    size={30}
                    className="cursor-pointer absolute right-[22px] top-[24px] xl:hidden"
                    onClick={() => setToggle((prev) => !prev)}
                />
                <div className="flex flex-col gap-20 ">
                    <div className="flex items-center px-4 py-2 border-1 rounded-xl">
                        <Image
                            width={60}
                            height={60}
                            className="rounded-full"
                            src={"/vercel.svg"}
                            alt={"user image"}
                        />
                        <div className="ml-3">
                            <p className="text-base font-medium ">username</p>
                            <p className="text-base font-medium">email</p>
                        </div>
                    </div>
                    <ul className="flex gap-1 flex-col">
                        {sideBarLinks.map((link, i) => (
                            <li
                                onClick={() => setToggle((prev) => !prev)}
                                key={i}
                                className={`flex gap-2 w-full py-2 px-4 text-white/80 rounded-md hover:text-white transition-all ${pathName == link.href && "bg-slate-600"
                                    }`}
                            >
                                {link.icon}
                                <Link href={link.href} className="w-full capitalize">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <Button
                        variant={"ghost"}
                        onClick={() => {
                            alert('user logout')
                        }}
                        className="w-full border border-primary/15"
                    >
                        Logout
                    </Button>
                </div>
            </div>
        </>
    );
}