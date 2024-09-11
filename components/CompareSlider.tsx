import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { useEffect, useState } from "react";

export const CompareSlider = ({
  original,
  segmented,
  backgroundColor,
}: {
  original: string;
  segmented: string;
  backgroundColor: string;
}) => {
  const [bgColor, setBgColor] = useState<string>(backgroundColor);

  useEffect(() => {
    setBgColor(backgroundColor);
  }, [backgroundColor]);

  return (
    <div className="relative rounded-2xl shadow-md">
      <ReactCompareSlider
        itemOne={<ReactCompareSliderImage src={original} alt="original photo" style={{ backgroundColor: bgColor, borderRadius: '1rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }} />}
        itemTwo={<ReactCompareSliderImage src={segmented} alt="segmented photo" style={{ backgroundColor: bgColor, borderRadius: '1rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }} />}
        portrait
        className="flex w-[475px] mt-5 rounded-2xl shadow-md"
      />
    </div>
  );
};
