import React from "react";
const Usdt: React.FC<
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
        d="M13.5 9.022c4.811.145 8.5.975 8.5 1.978 0 1.105-4.477 2-10 2s-10-.895-10-2c0-1.003 3.689-1.833 8.5-1.978"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.5 10.478V6h6V3h-15v3h6v4.478m3 2.5V21h-3v-8.022"
      />
    </svg>
  );
};
export default Usdt;
