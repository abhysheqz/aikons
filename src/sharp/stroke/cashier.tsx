import React from "react";
const Cashier: React.FC<
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
        d="M21 15H3v7h18z"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="m19 15-1-9H6l-1 9" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 2h3m3 0h-3m0 0v4"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M9 18.5h6" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 9.5h3"
      />
    </svg>
  );
};
export default Cashier;
