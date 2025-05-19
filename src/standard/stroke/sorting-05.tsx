import React from "react";
const Sorting_05: React.FC<
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
        d="M3.5 18.5 6 21l2.5-2.5m-2.5-4v5.891M3.5 5.5 6 3l2.5 2.5M6 9.5V3.609M11.5 10h7M11.5 14h4M11.5 18h2M11.5 6h9"
      />
    </svg>
  );
};
export default Sorting_05;
