import type { CollectionEntry } from "astro:content";
import { ChevronDown } from "lucide-react";
import { useState, useId } from "react";

interface Props {
  faqs: CollectionEntry<"faqs">[];
}

const Faq: React.FC<Props> = ({ faqs }) => {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const baseId = useId();

  const toggle = (id: string) => {
    setOpenItem((curr) => (curr === id ? null : id));
  };

  return (
    <div className="my-[150px] flex flex-col items-center justify-center faq relative" id="faq">
      <h2 className="text-[35px] italic font-bold text-center mb-[50px]">
        Najczęściej zadawane pytania
      </h2>

      <div className="w-full max-w-[800px] divide-y divide-neutral-800/40 border border-neutral-800/40 rounded-xl overflow-hidden">
        {faqs
          .sort(({ data: a }, { data: b }) => b.priority - a.priority)
          .map(({ data: faq }) => {
            const id = `${baseId}-${faq.id}`;
            const isOpen = openItem === id;
            return (
              <div key={id} className="group bg-neutral-900/40 backdrop-blur-sm">
                <h3>
                  <button
                    type="button"
                    onClick={() => toggle(id)}
                    aria-expanded={isOpen}
                    aria-controls={`${id}-panel`}
                    className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left text-[16px] font-medium transition-colors hover:bg-neutral-800/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-500"
                  >
                    <span className="w-full">{faq.question}</span>
                    <span
                      className={`inline-flex h-5 w-5 items-center justify-center rounded-full text-neutral-400 text-xs transition-transform ${
                        isOpen ? "rotate-90" : ""
                      }`}
                      aria-hidden="true"
                    >
                      <ChevronDown className="w-3 h-3" />
                    </span>
                  </button>
                </h3>
                <div
                  id={`${id}-panel`}
                  role="region"
                  aria-labelledby={id}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  } overflow-hidden`}
                >
                  <div className="min-h-0">
                    <div className="px-6 pb-6 pt-1 text-sm leading-relaxed text-neutral-300">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Faq;
