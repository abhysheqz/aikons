import React from "react";
const WifiMediumSignal: React.FC<
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
        d="M2.778 5.484a14.7 14.7 0 0 1 9.217-3.234 14.7 14.7 0 0 1 9.218 3.234c1.117.896 1.17 2.46.398 3.525l-2.359 3.256-1.294-.678-.03-.015a13.98 13.98 0 0 0-11.867 0l-1.35.656L2.38 9.009c-.772-1.065-.719-2.63.399-3.525"
      />
      <path
        fill="currentColor"
        d="m5.605 13.46 1.536 2.12 1.362-.641a9.47 9.47 0 0 1 7.008.011l1.32.656 1.532-2.114-1.086-.568a12.48 12.48 0 0 0-10.576.005z"
      />
      <path
        fill="currentColor"
        d="m14.861 16.302 1.077.536-2.526 3.485a1.75 1.75 0 0 1-2.834 0l-2.54-3.506 1.08-.51a7.7 7.7 0 0 1 5.743-.005"
      />
    </svg>
  );
};
export default WifiMediumSignal;
