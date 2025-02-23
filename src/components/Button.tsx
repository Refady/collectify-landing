import { cn } from "@/lib/utils.ts";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<Props> = ({ children, className }) => {
  return (
    <button
      className={cn(
        "bg-darkgray hover:bg-cprimary text-white font-semibold py-[12px] px-[20px] rounded-md cursor-pointer transition-colors flex gap-[15px]",
        className
      )}>
      {children}
    </button>
  );
};

export default Button;