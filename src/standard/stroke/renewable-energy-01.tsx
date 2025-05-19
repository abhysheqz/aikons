import React from "react";
const RenewableEnergy_01: React.FC<
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
        d="M18 7c2.412 1.345 4 3.9 4 6.5 0 2.059-1.389 4.145-3 5.5v3h-2l-1-1.5c-1.5.5-4 1-6 0L9 22H7v-3l-5-3.5v-3h2C4.5 10 6.208 8 8 7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.5 2 11 6h4l-2.5 4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7.5 12"
      />
    </svg>
  );
};
export default RenewableEnergy_01;
