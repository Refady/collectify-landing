import Button from "@/components/Button.tsx";
import { LogIn } from "lucide-react";

const About = () => {
  return (
    <div className="my-[100px] flex flex-col items-center about relative" id="about">
      <h2
        className="text-[35px] font-bold leading-10 text-center mb-[60px] about__title relative md:text-[50px] md:leading-16 max-w-[800px] md:mb-[100px]">Twój
        sposób na
        organizację
        klasowego
        budżetu</h2>
      <p className="text-[18px] text-center leading-10 md:text-[20px] font-medium max-w-[800px] md:leading-12">
        Ta aplikacja została stworzona z myślą o klasowych skarbnikach, którzy chcą uporządkować proces zbierania
        pieniędzy od wszystkich uczniów.
        <br /><br />
        Dzięki Collectify nie tylko zbiórki będą lepiej zorganizowane, ale również odpowiednio zarchiwizowane, co ułatwi
        śledzenie wpłat. Niech zbieranie pieniędzy stanie się prostsze niż kiedykolwiek wcześniej dzięki Collectify!
      </p>

      <a href="/app/">
        <Button className="mt-[50px] md:mt-[80px]"><LogIn /> Założ darmowe konto</Button>
      </a>
    </div>
  );
};

export default About;