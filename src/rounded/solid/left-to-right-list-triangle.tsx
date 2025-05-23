import React from "react";
const LeftToRightListTriangle: React.FC<
  {
    size?: number | string | undefined,
  } & React.ComponentProps<"svg">
> = ({ size = 24, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10 5.5a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H11a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m5.517 16.236.05.034.047.031c.493.33.934.626 1.244.911.338.31.642.72.642 1.288 0 .57-.304.978-.642 1.289-.31.285-.75.58-1.244.91l-.047.032-.05.034c-.49.328-.932.624-1.305.795-.394.18-.949.33-1.48-.025-.485-.326-.62-.864-.676-1.299C2 19.798 2 19.222 2 18.552v-.10300000000000001c0-.67 0-1.246.056-1.685.056-.434.19-.973.677-1.298.53-.355 1.085-.206 1.48-.025.372.17.814.467 1.304.795M5.517 3.236l.05.034.047.031c.493.33.934.626 1.244.911.338.31.642.72.642 1.288 0 .57-.304.978-.642 1.289-.31.285-.75.58-1.244.91l-.047.032-.05.034c-.49.328-.932.624-1.305.795-.394.18-.949.33-1.48-.025-.485-.326-.62-.864-.676-1.299C2 6.798 2 6.222 2 5.552v-.10300000000000001c0-.67 0-1.246.056-1.685.056-.434.19-.972.677-1.298.53-.355 1.085-.206 1.48-.025.372.17.814.467 1.304.795"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10 12a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H11a1 1 0 0 1-1-1M10 18.5a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H11a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LeftToRightListTriangle;
