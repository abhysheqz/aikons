import React from "react";
const CardExchange_01: React.FC<
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
        d="M14 21H2V11h12z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 13h6V3H10v6M10 7h12M2 15h12"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2 8c0-3 1.5-5 5-5v2M22 16c0 3-1.5 5-5 5v-2"
      />
    </svg>
  );
};
export default CardExchange_01;
