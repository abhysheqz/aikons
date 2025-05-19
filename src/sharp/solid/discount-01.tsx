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
        fill="currentColor"
        fillRule="evenodd"
        d="M1.5 1.5h7.644v2H3.5v5.644h-2zm19 2h-5.644v-2H22.5v7.644h-2zm2 11.356V22.5h-7.644v-2H20.5v-5.644zM3.5 20.5v-5.644h-2V22.5h7.644v-2z"
        clipRule="evenodd"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 8h.009M16 16h.009"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m16.707 8.707-8 8-1.414-1.414 8-8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Discount_01;
