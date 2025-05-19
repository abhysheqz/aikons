import React from "react";
const BitcoinPiggyBank: React.FC<
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
        strokeWidth={1.5}
        d="M21.5 11.029c.324.774.5 1.605.5 2.471 0 2.059-1.389 4.145-3 5.5v3h-2l-1-1.5c-1.729.444-4.271.444-6 0L9 22H7v-3s-3.5-1-5-3.942V12.5h2c.5-2.5 3.23-5.264 6.02-6.08"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.125 9.5v-6M16 3.5V2m0 9V9.5m-1.875-3h3.75m0 0c.621 0 1.125.504 1.125 1.125v.75c0 .621-.504 1.125-1.125 1.125H13m4.875-3C18.496 6.5 19 5.996 19 5.375v-.75c0-.621-.504-1.125-1.125-1.125H13"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7.5 12h.009"
      />
    </svg>
  );
};
export default BitcoinPiggyBank;
