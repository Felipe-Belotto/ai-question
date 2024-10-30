import Image from "next/image";
import { LanguageSelector } from "./ui/LanguageSelector";
import { ThemeToggleWrapper } from "./ui/theme-toggle";

export function Header() {
  return (
    <header className="border-b bg-primary/5 backdrop-blur sticky top-0 z-50 w-full">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="AI Question Logo"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <span className="font-bold text-xl text-primary">AI Question</span>
        </div>
        <div className="flex items-center gap-4">
          <LanguageSelector />
          {/* 		<ThemeToggleWrapper /> */}
        </div>
      </div>
    </header>
  );
}
