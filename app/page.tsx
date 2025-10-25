import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Swords, Telescope, Orbit, MessageSquareWarning } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center gap-6 mt-20">
      <div>
        <h1 className="text-4xl text-center">Bienvenue sur Relinx</h1>
        <p className="text-center max-w-lg mx-auto text-muted-foreground">
          Jeu de sémantique relationnelle
        </p>
      </div>
      <div className="grid grid-cols-3 w-full mx-auto">
        {/* Colonne 1 - Stats */}
        <div className="flex flex-col gap-6 px-10 w-full">
          <Card className="bg-card/50">
            <CardHeader>
              <div className="gap-4 flex items-center mb-0.5">
                <CardTitle>Statistique - A venir</CardTitle>
              </div>
              <CardDescription>Content - A venir</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Content - A venir</p>
            </CardContent>
          </Card>
        </div>

        {/* Colonne 2 - Modes de jeu */}
        <div className="flex flex-col gap-6 px-10 w-full">
          <Card>
            <CardHeader>
              <CardTitle>Choisissez un mode</CardTitle>
              <CardDescription>
                Sélectionnez le mode de jeu que vous souhaitez explorer
              </CardDescription>
            </CardHeader>
            <CardContent className="justify-center items-center">
              <div className="flex gap-8">
                <CardAction>
                  <Button variant="default" className="min-w-25 ">
                    <Orbit />
                    <Link href={"/logic"}>
                      <span>Logique</span>
                    </Link>
                  </Button>
                </CardAction>
                <CardAction>
                  <Button variant="disabled" className="min-w-25">
                    <Telescope />
                    <Link href={"/creative"}>
                      <span>Créatif</span>
                    </Link>
                  </Button>
                </CardAction>
                <CardAction>
                  <Button variant="disabled" className="min-w-25">
                    <Swords />
                    <Link href={"/duel"}>
                      <span>Duel</span>
                    </Link>
                  </Button>
                </CardAction>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-accent/10">
            <CardHeader>
              <div className="gap-4 flex items-center mb-0.5">
                <MessageSquareWarning />
                <CardTitle>Comment jouer</CardTitle>
              </div>

              <CardDescription>
                Découvrez les règles et les instructions pour profiter
                pleinement de Relinx
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Relinx est un jeu de sémantique relationnelle où les joueurs
                doivent établir des connexions logiques entre différents
                concepts. Choisissez un mode de jeu et suivez les instructions
                pour commencer votre aventure.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Colonne 3 - Annonces */}
        <div className="flex flex-col gap-6 px-10 w-full">
          <Card className="bg-card/50">
            <CardHeader>
              <div className="gap-4 flex items-center mb-0.5">
                <MessageSquareWarning />
                <CardTitle>Annonce</CardTitle>
              </div>

              <CardDescription>En cours de développement...</CardDescription>
              <CardDescription>Version : v1.1.0</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Informations importantes concernant les mises à jour :</p>

              <p>Développement en cours, nouvelles fonctionnalités à venir.</p>
            </CardContent>
          </Card>
          <Card className="bg-cyan-50">
            <CardHeader>
              <div className="gap-4 flex items-center mb-0.5">
                <MessageSquareWarning />
                <CardTitle>A propos</CardTitle>
              </div>

              <CardDescription>
                Dernières mises à jour et nouvelles de Relinx
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Nous sommes ravis d'annoncer le lancement prochain de nouveaux
                modes de jeu passionnants et de fonctionnalités améliorant
                l'expérience utilisateur. Restez à l'écoute pour plus de détails
                !
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

// Stats
// - nombre de parties jouées dans les différents modes
// - mot du jours disponible en fonction du modes et niveau
// - nombre de joueurs actifs
// - taux de réussite des joueurs

// Animation d'entrée

// Hoover avec description sur les modes

// Section "À propos de Relinx"
// - Objectifs du jeu
// - Équipe de développement
// - Contact et support
