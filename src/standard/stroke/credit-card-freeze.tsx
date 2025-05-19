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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 8h20M10 19H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4.5M17.5 12v2m0 0v5m0-5 1.688-.875M17.5 14l-1.687-.875M17.5 19l-1.687.875M17.5 19l1.688.875M17.5 19v2m4.5-4.5h-2m0 0h-5m5 0 .875 1.688M20 16.5l.875-1.687M15 16.5l-.875-1.687M15 16.5l-.875 1.688M15 16.5h-2"
      />
    </svg>
  );
};
export default CreditCardFreeze;
