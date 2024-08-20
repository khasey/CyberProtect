import { BentoDemo } from "@/components/bento/Bento";
import { CardSpotlightDemo } from "@/components/card";
import { LogoSectionDemo } from "@/components/LogoSection";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { DotPattern } from "@/components/magicui/dot-pattern";
import WordRotate from "@/components/magicui/word-rotate";
import { Logo, SidebarDemo } from "@/components/sidebar/SideBar";
import { FeaturesSectionDemo } from "@/components/ui/features";
import { FlipWords } from "@/components/ui/flip-word";
import { cn } from "@/lib/utils";
import { ArrowRightIcon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const words = ["Site", "Application mobile", "Application web", "Réseau", "Entreprise"];
  return (
    <div className="relative flex flex-col w-screen h-screen">
      <div
        id="container"
        className="w-full h-full flex flex-col justify-center items-center "
      >
        <div
          id="top"
          className="w-full h-full  flex justify-center items-center"
        >
          <div
            id="left"
            className="w-full h-full gap-4  flex flex-col px-20 justify-center items-start"
          >
            <div className="flex flex-col">
              <div className="text-5xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
              Protégez Votre
                <FlipWords words={words} /> <br />
                avec CyberProtect
              </div>
            </div>

            <p className="text-xl font-extralight">
              Chez CyberProtect, nous sommes spécialisés dans les audits de
              sécurité pour assurer la protection de votre site web contre les
              cybermenaces. Nos experts analysent en profondeur les
              vulnérabilités pour vous offrir une tranquillité d'esprit.
              Protégez vos données, renforcez votre réputation et prévenez les
              attaques en investissant dans la sécurité de votre site dès
              aujourd'hui.
            </p>
            <div className="z-20">
              <Link href="/services">
                <AnimatedShinyText className="cursor-pointer inline-flex items-center justify-center  transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                  <span>✨ Découvrir nos services</span>
                  <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedShinyText>
              </Link>
            </div>
          </div>
          <div
            id="right"
            className="w-full h-full flex justify-center items-center"
          >
            <CardSpotlightDemo />
          </div>
        </div>
        <div id="bottom" className="w-full h-full px-20">
          <FeaturesSectionDemo />
        </div>
      </div>

      <div className="absolute w-screen h-screen ">
        <DotPattern
          x={100}
          y={100}
          cr={1}
          cx={1}
          cy={1}
          className={cn(
            "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
          )}
        />
      </div>
    </div>
  );
}
