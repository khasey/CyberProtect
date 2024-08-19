"use client"
import { useState, useEffect } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SidebarDemo } from "@/components/sidebar/SideBar"; // Chemin à vérifier
import { DockDemo } from "@/components/dock";
 // Assurez-vous que le chemin est correct

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // État pour déterminer si l'écran est inférieur à 1200px
  const [isMobileView, setIsMobileView] = useState(false);

  // useEffect pour surveiller les changements de taille d'écran
  useEffect(() => {
    const handleResize = () => {
      // Vérifie si la taille de l'écran est inférieure à 1200px
      setIsMobileView(window.innerWidth < 1200);
    };

    // Appelle la fonction à l'initialisation
    handleResize();

    // Ajoute un listener pour surveiller les redimensionnements
    window.addEventListener("resize", handleResize);

    // Nettoie l'event listener lorsqu'il n'est plus nécessaire
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Affiche SidebarDemo si l'écran est supérieur à 1200px, sinon DockDemo */}
        {isMobileView ? (
          <DockDemo>
            {children} {/* Contenu des pages */}
          </DockDemo>
        ) : (
          <SidebarDemo>
            {children} {/* Contenu des pages */}
          </SidebarDemo>
        )}
      </body>
    </html>
  );
}
