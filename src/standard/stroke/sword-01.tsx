import React from "react";
const Sword_01: React.FC<
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
        d="M2.5 19.5c.487.072.956.295 1.33.67.375.374.598.843.67 1.33M8 16l-4 4M9 16.5l11.5-9 1-5-5 1-9 11.5M4 13h.572a2 2 0 0 1 1.414.586l4.428 4.428A2 2 0 0 1 11 19.43V20"
      />
    </svg>
  );
};
export default Sword_01;
