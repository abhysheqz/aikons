import React from "react";
const Sword_02: React.FC<
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
        d="M5.06 21.06a1.5 1.5 0 1 1-2.12-2.121 1.5 1.5 0 0 1 2.12 2.122ZM8 16l-3 3M9.5 16.5l11-10 1-4-4 1-10 11"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 13h.572a2 2 0 0 1 1.414.586l4.428 4.428A2 2 0 0 1 11 19.428V20"
      />
    </svg>
  );
};
export default Sword_02;
