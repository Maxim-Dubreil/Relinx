import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-[80vh] flex-col px-4 py-10">
      <div className="text-center space-y-2">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
          Jeu de sémantique relationnelle
        </p>
        <h1 className="text-4xl font-semibold sm:text-5xl">
          Bienvenue sur Relinx
        </h1>
      </div>

      <div className="flex flex-1 items-center justify-center">
        <section className="max-w-2xl space-y-10 text-center">
          <p className="text-base text-muted-foreground">
            Mode de jeu disponible : <strong>Logique</strong>. Trouvez le mot en
            te basant sur deux mots "indices". Tout les jours un mots
            différents. Tentative libre :) Bonne chance !
          </p>
          <div className="flex flex-col items-center gap-3">
            <Button
              asChild
              size="lg"
              className="gap-3 px-10 py-6 text-lg shadow-lg shadow-primary/30"
            >
              <Link href="/logic">
                Jouer maintenant
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Mode disponible : Logique
            </p>
          </div>
        </section>
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
