import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

export const CompareSlider = ({
  original,
  segmented,
}: {
  original: string;
  segmented: string;
}) => {
  return (
    <ReactCompareSlider
      itemOne={<ReactCompareSliderImage src={original} alt="original photo" />}
      itemTwo={<ReactCompareSliderImage src={segmented} alt="segmented photo" />}
      portrait
      className="flex w-[475px] mt-5"
    />
  );
};
