import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Page() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center px-4 py-10">
      <div className="mb-10 w-full max-w-4xl space-y-2 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Mode quotidien
        </p>
        <h1 className="text-2xl font-semibold sm:text-3xl">Mode logique</h1>
        <p className="text-sm text-muted-foreground">
          1 mot à trouver par jour, le même pour tout le monde. Utilise les deux
          mots d'indice pour deviner le mot du jour.
        </p>
      </div>

      <section className="grid w-full max-w-5xl gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        {/* Colonne centrale : indices + input */}
        <div className="flex flex-col items-center gap-8">
          <div className="w-full max-w-xl space-y-3 text-center">
            <h2 className="text-lg font-medium">Mots d'indice</h2>
            <p className="text-xs text-muted-foreground">
              Contexte du puzzle du jour
            </p>
            <div className="mt-2 flex items-center justify-center gap-6 py-5 text-lg">
              <p id="mot1" className="font-medium">
                mot1
              </p>
              <span className="text-muted-foreground">- [secret] -</span>
              <p id="mot2" className="font-medium">
                mot2
              </p>
            </div>
          </div>

          <div className="w-full max-w-xl space-y-3">
            <h2 className="text-sm font-medium">Entrer votre mot</h2>
            <p className="text-xs text-muted-foreground">
              Tape un mot lié aux indices, puis valide pour voir si c'est le mot
              du jour.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Input
                type="text"
                id="input-mot"
                placeholder="exemple: chat"
                className="sm:flex-1"
              />
              <Button size="default" className="whitespace-nowrap">
                Valider
              </Button>
            </div>
          </div>
        </div>

        {/* Colonne droite : essais scrollables */}
        <aside className="flex max-h-[500px] flex-col rounded-md border border-muted-foreground/20 bg-card/40 p-4 text-sm">
          <div className="mb-3">
            <h2 className="text-sm font-medium">Essais du jour</h2>
            <p className="text-xs text-muted-foreground">
              Tous tes mots tentés, dans l'ordre, avec un indicateur de
              proximité.
            </p>
          </div>
          <div className="flex-1 space-y-1 overflow-y-auto rounded-md border border-dashed border-muted-foreground/30 p-3 text-muted-foreground">
            <p className="mb-1 font-medium text-foreground">
              Aucun essai pour l'instant.
            </p>
            <p>
              À chaque tentative, le mot s'ajoutera ici avec une indication du
              niveau de proximité : très proche, proche, loin ou très loin.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}
