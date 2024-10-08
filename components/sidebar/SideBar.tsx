"use client"
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import Image from 'next/image';
import {
  IconAddressBook,
  IconArrowLeft,
  IconBrandSlack,
  IconInfoCircle,
  IconLayout,
  IconSettings,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";


export function SidebarDemo({ children }: { children: React.ReactNode }) {

  const img = "../public/logo-cyberprotect.svg";

  const links = [
    {
      label: "Acceuil",
      href: "/",
      icon: (
        <IconLayout className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Services",
      href: "/services",
      icon: (
        <IconBrandSlack className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Resources",
      href: "/resources",
      icon: (
        <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "A propos",
      href: "/apropos",
      icon: (
        <IconInfoCircle className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Contact",
      href: "/contact",
      icon: (
        <IconAddressBook className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        `rounded-md  flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden`,
        "h-screen"
      )}
    >
      {/* Sidebar */}
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>

      {/* Children passed to SidebarDemo */}
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
}

export const Logo = () => {
  const img = "/logo/logo.svg";
  return (
    <Link href="#" className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20">
      {/* <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" /> */}
      <Image src={img} alt={"logo"} width={24} height={24}>

      </Image>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        CyberProtect
      </motion.span>
    </Link>
  );
};

export const LogoIcon = () => {
  const img = "/logo/logo.svg";
  return (
    <Link href="#" className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20">
      {/* <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" /> */}
      <Image src={img} alt={"logo"} width={24} height={24}></Image>
     
    </Link>
  );
};
