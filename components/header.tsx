import { Button } from "@/components/ui/button";
import { Swords, Telescope, Orbit } from "lucide-react";

import Link from "next/link";
import "../public/icon_relinx_32x32.png";
export default function Header() {
  return (
    <header className="sticky my-4 mx-150 rounded-lg py-2 px-8 bg-card text-primary flex items-center justify-between shadow-md">
      <div>
        <Link href="/" className="flex items-center space-x-2">
          <img src="/icon_relinx_32x32.png" alt="Icône de jeu" />
        </Link>
      </div>
      <div className="flex space-x-4">
        <Button size="sm" variant="link" className="text-foreground">
          <Link href="/logic" className="flex items-center space-x-2">
            <Orbit className="text-foreground" />
            <span className="text-foreground">Logique</span>
          </Link>
        </Button>
        {/* <Button
          size="sm"
          variant="link"
          className="text-foreground cursor-not-allowed"
        > */}
          {/* <Link
            href="/creative"
            className="flex items-center space-x-2 cursor-not-allowed"
          >
            <Telescope className="text-foreground" />
            <span className="text-foreground">Créatif</span>
          </Link>
        </Button>
        <Button
          size="sm"
          variant="link"
          className="text-foreground cursor-not-allowed"
        >
          <Link
            href="/duel"
            className="flex items-center space-x-2 cursor-not-allowed"
          >
            <Swords className="text-foreground" />
            <span className="text-foreground">Duel</span>
          </Link>
        </Button> */}
      </div>
    </header>
  );
}
