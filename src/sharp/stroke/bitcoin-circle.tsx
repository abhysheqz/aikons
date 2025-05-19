import React from "react";
const BitcoinCircle: React.FC<
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
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9 12h4.2M9 12V8.296h4.2c.994 0 1.8.83 1.8 1.852S14.194 12 13.2 12M9 12v3.704h4.2c.994 0 1.8-.83 1.8-1.852S14.194 12 13.2 12m-2.706-3.704V6.5m0 11v-1.796m2.404-7.408V6.5m0 11v-1.796"
      />
    </svg>
  );
};
export default BitcoinCircle;
