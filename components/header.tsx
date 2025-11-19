import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="font-black tracking-tight text-2xl text-primary"
        >
          Relinx
        </Link>
        <div className="flex items-center gap-4">
          <p className="text-[11px] text-muted-foreground italic">proto v0.1</p>
          <Button asChild size="sm" className="px-4">
            <Link href="/logic">Jouer</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
