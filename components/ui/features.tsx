import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Identification de la faille",
      description:
        "Nous détectons une vulnérabilité potentielle dans votre système.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Rapport détaillé",
      description:
        "Un rapport préliminaire est généré, indiquant les détails de la faille identifiée.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Notification immédiate",
      description:
        "Nous vous informons immédiatement des risques et des mesures d’urgence à prendre.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Analyse approfondie",
      description:
        "Nos experts effectuent une analyse plus poussée pour comprendre l'impact et la gravité.",
      icon: <IconCloud />,
    },
    {
      title: "Proposition de solutions",
      description:
        "Nous fournissons des recommandations pour corriger la faille et améliorer la sécurité.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Mise en œuvre des correctifs",
      description:
        "En collaboration avec votre équipe, nous appliquons les correctifs nécessaires.",
      icon: <IconHelp />,
    },
    {
      title: "Tests de validation",
      description:
        "Après l'application des correctifs, nous effectuons des tests pour vérifier leur efficacité.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Suivi et prévention",
      description:
        "Nous offrons un suivi continu et des conseils pour prévenir de futures vulnérabilités.",
      icon: <IconHeart />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-8xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
