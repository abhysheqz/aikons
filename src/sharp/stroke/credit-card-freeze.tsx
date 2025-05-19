import React from "react";
const CreditCardFreeze: React.FC<
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
        d="M22 10V3H2v16h8M2 8h20"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.5 12v2m0 0v5m0-5 1.688-.875M17.5 14l-1.687-.875M17.5 19v2m0-2-1.687.875M17.5 19l1.688.875M22 16.5h-2m0 0h-5m5 0 .875 1.688M20 16.5l.875-1.687M15 16.5h-2m2 0-.875-1.687M15 16.5l-.875 1.688"
      />
    </svg>
  );
};
export default CreditCardFreeze;
