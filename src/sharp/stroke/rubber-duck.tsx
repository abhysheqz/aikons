import React from "react";
const RubberDuck: React.FC<
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
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M7.5 6v.01M4.625 6a4 4 0 0 1 7.872 1c0 1.056-.685 1.905-1.354 2.62V10h5.83c1.378 0 2.023-1.12 2.023-2.5h.5c2.999 3.5 2.468 7.5 2.468 7.5 0 3.5-3.468 6-8.967 6H8.99a5.495 5.495 0 0 1-5.49-5.5c0-2.19 1.278-4.08 3.126-4.965v-.279C6.095 9.912 5.35 9.548 5.035 9m-.41-3L2 7c.19 1 1.063 2 3.034 2m-.409-3 .587.855A1.7 1.7 0 0 1 5.034 9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M11 18h1.5c2.21 0 5-2.79 5-5H11a2.5 2.5 0 0 0 0 5Z"
      />
    </svg>
  );
};
export default RubberDuck;
