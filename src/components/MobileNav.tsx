import { useEffect, useRef, useState } from "react";
import { LogIn, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { NavItem } from "@/types.ts";

interface Props {
  items: NavItem[];
}

const MobileNav: React.FC<Props> = ({ items }) => {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const firstButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (open) {
      firstButtonRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="md:hidden">
      <Button
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        onClick={() => setOpen((o) => !o)}
        className="cursor-pointer"
        variant="outline"
      >
        <Menu />
      </Button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40 h-screen bg-black/60 backdrop-blur-sm animate-fade-in"
            onClick={close}
            aria-hidden="true"
          />
          <div
            id="mobile-nav-panel"
            role="dialog"
            aria-modal="true"
            className="fixed inset-y-0 right-0 z-50 w-[80%] min-h-screen max-w-xs bg-neutral-900 border-l border-neutral-800 shadow-xl flex flex-col p-6 gap-6 animate-slide-in"
            ref={panelRef}
          >
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold tracking-wide">Menu</span>
              <button
                ref={firstButtonRef}
                onClick={close}
                aria-label="Zamknij menu"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-500"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto">
              <ul className="flex flex-col gap-4">
                {items.map((item) => (
                  <li key={item.title}>
                    <a
                      href={item.url}
                      target={item.targetBlank ? "_blank" : "_self"}
                      className="block font-medium text-neutral-200 hover:text-white transition-colors"
                      onClick={close}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="pt-2 border-t border-neutral-800">
              <a href="/app/" className="block" onClick={close}>
                <Button className="w-full justify-center cursor-pointer">
                  <LogIn className="mr-1" /> Rozpocznij
                </Button>
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MobileNav;
