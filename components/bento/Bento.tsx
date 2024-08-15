
import {
    BellIcon,
    CalendarIcon,
    FileTextIcon,
    GlobeIcon,
    InputIcon,
  } from "@radix-ui/react-icons";
  import {
    IconCloudLock,
    IconHomeShield,
    IconShieldHalf,
    IconLock,
    IconSpy,

} from "@tabler/icons-react";
  
  import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
  
  const features = [
    {
      Icon: IconCloudLock,
      name: "Injection SQL",
      description: "Une technique d'attaque qui exploite les vulnérabilités de sécurité dans une application pour exécuter des commandes SQL non autorisées, permettant l'accès à la base de données sous-jacente.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
      Icon: IconHomeShield,
      name: "Cross-Site Scripting (XSS)",
      description: "Une vulnérabilité qui permet aux attaquants d'injecter des scripts malveillants dans des pages web vues par d'autres utilisateurs, souvent pour voler des cookies ou des données de session.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: IconShieldHalf,
      name: "Déni de service (DoS)",
      description: "Une attaque visant à rendre une machine ou un réseau indisponible pour ses utilisateurs prévus, typiquement en submergeant la cible avec une quantité excessive de requêtes.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
      Icon: IconLock,
      name: "Man-in-the-Middle (MitM)",
      description: "Une attaque où l'attaquant intercepte secrètement et potentiellement altère la communication entre deux parties qui croient qu'elles communiquent directement l'une avec l'autre.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: IconSpy,
      name: "Ransomware",
      description:
        "Un type de malware qui crypte les données de l'utilisateur et exige un paiement en échange de la clé de déchiffrement nécessaire pour récupérer l'accès aux données affectées.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
  ];
  
  export function BentoDemo() {
    return (
      <BentoGrid className="lg:grid-rows-3 h-full">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    );
  }
  