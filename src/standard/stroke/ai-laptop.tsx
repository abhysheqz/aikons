import React from "react";
const AiLaptop: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 4h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1M15.5 10v1.5m3-1.5v1.5m-3-9V4m3-1.5V4M14 5.5h-1.5m1.5 3h-1.5m9-3H20m1.5 3H20M11 3H6a2 2 0 0 0-2 2v10M2.368 20.723 4.02 15h15.932l1.674 5.72a1 1 0 0 1-.96 1.28H3.33a1 1 0 0 1-.96-1.277"
      />
    </svg>
  );
};
export default AiLaptop;
