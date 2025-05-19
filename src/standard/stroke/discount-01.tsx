import React from "react";
const Discount_01: React.FC<
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
        d="M9 2.5H4.5a2 2 0 0 0-2 2V9M15 2.5h4.5a2 2 0 0 1 2 2V9M15 21.5h4.5a2 2 0 0 0 2-2V15M9 21.5H4.5a2 2 0 0 1-2-2V15"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 8h.009m7.982 8H16"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m8 16 8-8"
      />
    </svg>
  );
};
export default Discount_01;
