import React from "react";
const Honey_02: React.FC<
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
        d="M8 5H6m14 0h-8m0-1.8v3.6M8 3.2v3.6M10 2v6M4 10h12M13.5 10l2.5 3.5V22H4v-8.5L6.5 10M8 15v4M4 15h12"
      />
    </svg>
  );
};
export default Honey_02;
