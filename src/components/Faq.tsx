import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { CollectionEntry } from "astro:content";

// const faqs = [
//   {
//     question: "Kiedy oficjalna premiera Collectify?",
//     answer: "Data premiery nie jest jeszcze znana. Obecnie pracujemy nad wersją beta, która zostanie udostępniona tak szybko, jak to możliwe. Jeśli chcesz być na bieżąco z postępami, śledź nas na naszych kanałach społecznościowych."
//   },
//   {
//     question: "Czy Collectify będzie darmowy?",
//     answer: "Tak, Collectify będzie dostępne za darmo. W przyszłości planujemy wprowadzić płatne funkcje premium, ale wersja podstawowa będzie zawsze dostępna za darmo."
//   },
//   {
//     question: "Czy Collectify będzie dostępne jako aplikacja na urządzenia mobilne?",
//     answer: "Na początku Collectify będzie dostępne tylko jako aplikacja webowa. W przyszłości planujemy wydanie aplikacji na urządzenia mobilne."
//   },
//   {
//     question: "Skąd pomysł na taki projekt?",
//     answer: "Naszą misją jest stworzenie narzędzia, które pomoże klasowym skarbnikom w organizcaji gotówkowych zbiórek pieniędzy. Wierzymy, że Collectify pomoże w zorganizowaniu zbiórek na szkolne wycieczki, prezenty dla nauczycieli, czy inne wydarzenia szkolne."
//   },
//   {
//     question: "Czy mogę pomóc w rozwoju Collectify?",
//     answer: "Oczywiście! Jesteśmy otwarci na wszelkie sugestie i propozycje. Jeśli masz pomysł na funkcję, która powinna znaleźć się w Collectify, odwiedź nas na naszym discordzie!"
//   }
// ];

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