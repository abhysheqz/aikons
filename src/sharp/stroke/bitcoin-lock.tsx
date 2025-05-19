import React from "react";
const BitcoinLock: React.FC<
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
      <path stroke="currentColor" strokeWidth={1.5} d="M4 22h16V9H4z" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.5 9V6.5a4.5 4.5 0 0 1 9 0V9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M10.438 18.167v-5.334m1.562 0V11.5m0 8v-1.333M10.438 15.5h3.124m0 0c.518 0 .938.448.938 1v.667c0 .552-.42 1-.937 1H9.5m4.063-2.667c.517 0 .937-.448.937-1v-.667c0-.552-.42-1-.937-1H9.5"
      />
    </svg>
  );
};
export default BitcoinLock;
