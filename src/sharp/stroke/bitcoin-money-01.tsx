import React from "react";
const BitcoinMoney_01: React.FC<
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
        strokeWidth={1.5}
        d="M22 4H2v16h20z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.874 4q.125.481.126 1a4 4 0 0 1-5 3.874M22 8.874q-.481.124-1 .126a4 4 0 0 1-3.874-5M17.126 20A4 4 0 0 1 22 15.126M2 15.126A4 4 0 0 1 6.874 20"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M10.438 14.667V9.333m1.562 0V8m0 8v-1.333M10.438 12h3.124m0 0c.518 0 .938.448.938 1v.667c0 .552-.42 1-.937 1H9.5M13.563 12c.517 0 .937-.448.937-1v-.667c0-.552-.42-1-.937-1H9.5"
      />
    </svg>
  );
};
export default BitcoinMoney_01;
