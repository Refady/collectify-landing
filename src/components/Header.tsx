import heroPhone from "@/assets/images/hero-phone.png";
import { LogIn } from "lucide-react";
import Button from "@/components/Button";

const Header = () => {
  return (
    <div className="md:flex md:justify-between md:items-center md:py-[50px] relative">
      <div
        className="py-[50px] w-full md:w-3/4 flex flex-col justify-center items-center text-center md:block md:text-left">
        <h1 className="text-[50px] font-extrabold italic header-title md:text-[65px]">
          Asystent
          <br />
          Klasowego
          <br />
          Skarbnika
        </h1>
        <p className="font-medium text-[17px] my-[30px] max-w-[700px] leading-8 md:text-[20px]">
          Jesteś skarbnikiem klasowym? Zorganizuj klasowe finanse z aplikacją Collectify, zapisując
          się do listy oczekujących.
        </p>

        <div className="flex flex-col gap-[15px] mt-[30px] md:mt-[60px] items-center md:items-start">
          <a href="/app/" className="block">
            <Button>
              <LogIn /> Załóż darmowe konto
            </Button>
          </a>
          <p className="text-[15px] max-w-[300px]">Dołącz do otwartych beta-testów aplikacji Collectify już teraz!</p>
        </div>
      </div>

      <div className="relative flex justify-center items-center header__image -z-10">
        <img
          className="z-50"
          src={heroPhone.src}
          alt="Telefon z aplikacją Collectify na ekranie"
        />
      </div>
    </div>
  );
};

export default Header;
