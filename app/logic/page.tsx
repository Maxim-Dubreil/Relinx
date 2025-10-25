import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
export default function Page() {
  return (
    <>
      <div>
        <h1>Logique Game</h1>
      </div>
      <div className="flex flex-grid grid-cols-4 h-screen overflow-auto px-4 py-4 gap-4 ">
        <div className="border-2 w-2xl bg-background rounded-lg shadow-m"></div>
        <div className="border-2 w-full bg-card rounded-lg shadow-md">
          <div className="flex flex-grid grid-cols-3">
            <Card className="my-2 mx-2">
              <CardHeader>
                <CardTitle>Trouver le mot</CardTitle>
              </CardHeader>
              <CardContent className="flex gap-4 mx-4 justify-center items-center">
                <p id="mot1">mot1</p>
                <p id="mot2">mot2</p>
              </CardContent>
            </Card>
            <Card className="my-2 mx-2 w-full">
              <CardHeader>
                <CardTitle>Entrer le mot</CardTitle>
              </CardHeader>
              <CardContent className="flex gap-4 mx-4 justify-center items-center">
                <Input
                  type="text"
                  id="input-mot"
                  placeholder="Entrez le mot ici"
                />
                <Button size="sm">Valider</Button>
              </CardContent>
            </Card>
            <div className="w-full"></div>
            <Card className="my-2 mx-2">
              <CardHeader>
                <CardTitle>Temps : </CardTitle>
              </CardHeader>
              <CardContent className="flex gap-4 mx-4 justify-center items-center">
                <p id="timer">00:00</p>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="my-2 mx-2">
              <CardHeader>
                <CardTitle>Liste mots : </CardTitle>
              </CardHeader>
              <CardContent className="flex gap-4 mx-4 items-center">
                <p id="resultat">Dernier mot entré: </p>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="border-2 w-2xl bg-card rounded-lg shadow-m">droite</div>
      </div>
    </>
  );
}
