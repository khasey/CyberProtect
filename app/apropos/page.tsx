"use client";
import GridPattern from "@/components/magicui/animated-grid-pattern";
import RetroGrid from "@/components/magicui/retro-grid";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const Apropos = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gray-100">
      {/* Section Titre */}
      <div className="text-center mb-10">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
          À Propos de <span className="text-blue-500">CyberProtect</span>
        </h1>
        <p className="mt-4 text-gray-700 text-lg lg:text-xl max-w-3xl">
          CyberProtect est votre partenaire de confiance pour la sécurité de vos systèmes
          d&apos;information. Nous nous engageons à protéger vos données, applications et
          infrastructures contre les menaces croissantes du monde numérique. Avec une
          équipe d&apos;experts passionnés, nous offrons des services d&apos;audit, de surveillance, 
          et de formation pour garantir une cybersécurité robuste et adaptée à vos besoins.
        </p>
      </div>

      {/* Section Détails de l'entreprise */}
      <div className="mt-10 max-w-4xl text-center">
        <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">
          Nos valeurs et engagements
        </h2>
        <p className="text-gray-700 text-md lg:text-lg mb-6">
          Chez CyberProtect, nous croyons que la sécurité des systèmes d&apos;information 
          est la pierre angulaire de toute entreprise moderne. Notre mission est de 
          vous fournir une protection fiable et proactive contre les cybermenaces.
          Nous offrons des services d&apos;audit de sécurité, de test de pénétration, de 
          surveillance des systèmes et des formations adaptées à vos équipes.
        </p>
        <p className="text-gray-700 text-md lg:text-lg">
          En choisissant CyberProtect, vous optez pour une cybersécurité de qualité 
          supérieure, renforcée par une expertise technique et un engagement sans faille 
          envers la protection de vos données. Faites confiance à nos solutions 
          personnalisées pour assurer la continuité et la sûreté de vos opérations.
        </p>
      </div>
      
      {/* Section Animation */}
      <div>
        <GridPattern
          width={20}
          height={20}
          x={1}
          y={1}
          className={cn(
            "z-0",
            "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
          )}
        />
      </div>
    </div>
  );
};

export default Apropos;
