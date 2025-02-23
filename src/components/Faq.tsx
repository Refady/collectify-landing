import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { CollectionEntry } from "astro:content";

interface Props {
  faqs: CollectionEntry<"faqs">[],
}

const Faq: React.FC<Props> = ({ faqs }) => {
  return (
    <div className="my-[150px] flex flex-col items-center justify-center faq relative" id="faq">
      <h2 className="text-[35px] italic font-bold text-center mb-[50px]">Najczęściej zadawane
        pytania</h2>

      <Accordion type="single" collapsible className="w-full max-w-[800px]">
        {
          faqs.map(({ data: faq }) => (
            <AccordionItem key={faq.id} value={`item-${faq.id}`}>
              <AccordionTrigger className="text-[16px]">{faq.question}</AccordionTrigger>
              <AccordionContent>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))
        }
      </Accordion>

    </div>
  );
};

export default Faq;