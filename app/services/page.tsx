import { CardDemo } from '@/components/cardShadcn';
import AnimatedGridPattern from '@/components/magicui/animated-grid-pattern';
import { cn } from '@/lib/utils';
import React from 'react';

const Services = () => {
  const card1 = {
    title: "Audit de Sécurité Web - 500€",
    description: "Il y a 1 heure",
    notifications: [
      { title: "Analyse complète de votre site", description: "Notre équipe a commencé l'audit de votre site web." },
      { title: "Vérification des vulnérabilités connues", description: "Nous recherchons les failles répertoriées dans les bases de données de vulnérabilités." },
      { title: "Test des protections existantes", description: "Nous testons l'efficacité de vos pare-feux et autres systèmes de sécurité." },
      { title: "Résultats préliminaires disponibles", description: "Les premières vulnérabilités détectées sont disponibles." },
      { title: "Rapport final en préparation", description: "Le rapport d'audit final sera livré dans 24 heures avec des recommandations." },
    ],
  };

  const card2 = {
    title: "Test de Pénétration Réseau - Tarification sur mesure",
    description: "Il y a 2 heures",
    notifications: [
      { title: "Simulation d'attaque en cours", description: "Nous testons la robustesse de votre réseau contre les attaques externes." },
      { title: "Test d'authentification et d'accès", description: "Nous vérifions la sécurité de vos systèmes d'authentification." },
      { title: "Exploitation de vulnérabilités internes", description: "Nous testons les failles pouvant être exploitées par un utilisateur interne." },
      { title: "Vulnérabilités critiques trouvées", description: "Des failles critiques ont été détectées et doivent être corrigées rapidement." },
      { title: "Proposition de correctifs", description: "Les solutions pour corriger les failles sont en cours de préparation." },
    ],
  };

  const card3 = {
    title: "Surveillance de la Sécurité des Données - Tarification sur mesure",
    description: "Il y a 3 heures",
    notifications: [
      { title: "Détection d'activités suspectes", description: "Une activité anormale a été détectée dans votre réseau et est en cours d'analyse." },
      { title: "Renforcement des politiques de sécurité", description: "Nous avons mis à jour vos politiques de sécurité pour renforcer vos protections." },
      { title: "Mise en place de systèmes d'alerte", description: "Des alertes en temps réel sont activées pour les activités suspectes." },
      { title: "Suivi des menaces en temps réel", description: "Nous surveillons en temps réel les menaces potentielles dans votre infrastructure." },
      { title: "Rapport de sécurité régulier", description: "Vous recevrez des rapports réguliers détaillant les menaces détectées et les actions prises." },
    ],
  };

  const card4 = {
    title: "Formation en Cybersécurité - 700€",
    description: "Il y a 4 heures",
    notifications: [
      { title: "Session de formation planifiée", description: "Votre session de formation en cybersécurité a été planifiée." },
      { title: "Introduction aux bonnes pratiques", description: "Introduction aux fondamentaux de la sécurité pour vos employés." },
      { title: "Simulation d'attaque", description: "Nous effectuons une simulation d'attaque pour préparer vos équipes." },
      { title: "Exercices de réponse aux incidents", description: "Vos équipes participent à des exercices pratiques pour réagir face aux incidents." },
      { title: "Rapport de progression", description: "Un rapport détaillant la progression de vos équipes sera fourni." },
    ],
  };

  return (
    <>
    <div className='w-full h-full flex items-center justify-center gap-4 flex-wrap z-20'>
      {/* Passer les props card1, card2, card3, card4 */}
      <CardDemo title={card1.title} description={card1.description} notifications={card1.notifications} />
      
      
      <CardDemo title={card4.title} description={card4.description} notifications={card4.notifications} />
      <CardDemo title={card2.title} description={card2.description} notifications={card2.notifications} />
      <CardDemo title={card3.title} description={card3.description} notifications={card3.notifications} />
    
      
    </div>
    <AnimatedGridPattern
        numSquares={130}
        maxOpacity={0.5}
        duration={2}
        repeatDelay={4}
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
    </>
  );
}

export default Services;
