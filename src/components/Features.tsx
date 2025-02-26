import FeatureItem from "@/components/Feature.tsx";
import type { CollectionEntry } from "astro:content";

interface Props {
  features: CollectionEntry<"features">[];
}

const Features = ({ features }) => {
  return (
    <div className="flex flex-col gap-[50px] my-[150px]" id="features">
      {
        features.sort(({ data: feature1 }, { data: feature2 }) => feature2.priority - feature1.priority).map(({ data: feature }) => (
          <FeatureItem key={feature.title} feature={feature} />
        ))
      }
    </div>
  );
};

export default Features;