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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 10h7M11 14h5M11 18h3M11 6h10"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6 14v6.388M3 18l3 3 3-3M6 10V3.77M3 6l3-3 3 3"
      />
    </svg>
  );
};
export default Sorting_05;
