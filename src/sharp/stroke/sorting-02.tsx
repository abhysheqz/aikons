import React from "react";
const Sorting_02: React.FC<
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
        d="M11 12h8M11 8h5M11 4h3M11 16h10"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6 3v17.28M3 18l3 3 3-3"
      />
    </svg>
  );
};
export default Sorting_02;
