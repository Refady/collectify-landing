import type { Feature as FeatureType } from "@/types.ts";

interface Props {
  feature: FeatureType;
}

const Feature: React.FC<Props> = ({ feature }) => {
  return (
    <div className="flex flex-col md:flex-row md:even:flex-row-reverse feature">
      <div className="feature__image w-full relative overflow-hidden">
        <img src={feature.image.url} alt={feature.title} className="w-full rounded-md" />
      </div>
      <div className="z-10 flex flex-col justify-center md:w-2/3 max-md:mt-[-30px]">
        <div className="w-[60px] h-[60px] bg-darkgray flex items-center justify-center rounded-md">
          <img src={feature.icon.url} alt={feature.title} className="w-[30px] h-[30px]" />
        </div>
        <h3 className="text-[28px] font-bold my-[10px]">{feature.title}</h3>
        <p>{feature.description}</p>
      </div>
    </div>
  );
};

export default Feature;