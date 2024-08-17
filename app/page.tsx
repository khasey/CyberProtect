
import { BentoDemo } from "@/components/bento/Bento";
import { LogoSectionDemo } from "@/components/LogoSection";
import { Logo, SidebarDemo } from "@/components/sidebar/SideBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col w-screen h-screen pr-24">
      <BentoDemo /> 
      <LogoSectionDemo />
    </div>
    
  );
}
