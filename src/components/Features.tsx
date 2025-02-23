import { features } from "@/utils/features.tsx";
import FeatureItem from "@/components/Feature.tsx";

const Features = () => {
  return (
    <div className="flex flex-col gap-[50px] my-[150px]" id="features">
      {
        features.map((feature) => (
          <FeatureItem key={feature.title} feature={feature} />
        ))
      }
    </div>
  );
};

export default Features;