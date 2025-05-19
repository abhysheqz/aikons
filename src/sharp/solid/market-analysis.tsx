import React from "react";
const MarketAnalysis: React.FC<
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
        d="M9.25 5.25h5.5v13.5h-5.5zM16.25 4.25h5.5v7.5h-5.5zM2.25 9.25h5.5v7.5h-5.5z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 17v5h-2v-5zM20 10v4h-2v-4zM13 2v5h-2V2zM20 2v4h-2V2zM6 15v4H4v-4zM6 7v4H4V7z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MarketAnalysis;
