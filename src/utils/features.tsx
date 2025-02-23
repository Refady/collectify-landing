import { Coins, List, Users2 } from "lucide-react";
import screen1 from "@/assets/images/features-screen1.jpg";
import screen2 from "@/assets/images/features-screen2.jpg";
import screen3 from "@/assets/images/features-screen3.jpg";
import type { Feature } from "@/types.ts";

export const features: Feature[] = [
  {
    title: "Stwórz swoją klasę",
    icon: <Users2 />,
    description: "Lorem ipsum dolor sit amet consectetur. Id quis ornare ac massa lectus nulla enim. Turpis et felis eu adipiscing. Quis amet sit varius vel. Imperdiet volutpat cras rutrum pellentesque velit sollicitudin turpis mattis lacus.",
    image: screen1.src
  },
  {
    title: "Stwórz nową zbiórkę",
    icon: <List />,
    description: "Lorem ipsum dolor sit amet consectetur. Id quis ornare ac massa lectus nulla enim. Turpis et felis eu adipiscing. Quis amet sit varius vel. Imperdiet volutpat cras rutrum pellentesque velit sollicitudin turpis mattis lacus.",
    image: screen2.src
  },
  {
    title: "Zbieraj pieniądze",
    icon: <Coins />,
    description: "Lorem ipsum dolor sit amet consectetur. Id quis ornare ac massa lectus nulla enim. Turpis et felis eu adipiscing. Quis amet sit varius vel. Imperdiet volutpat cras rutrum pellentesque velit sollicitudin turpis mattis lacus.",
    image: screen3.src
  }
];