import React from "react";
const Coinbase: React.FC<
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
        d="M21 11c-.499-4.5-4.326-8-8.972-8C7.042 3 3 7.03 3 12s4.042 9 9.028 9c4.646 0 8.473-3.5 8.972-8h-4.57a4.51 4.51 0 0 1-4.402 3.5A4.507 4.507 0 0 1 7.514 12c0-2.485 2.02-4.5 4.514-4.5A4.51 4.51 0 0 1 16.43 11z"
      />
    </svg>
  );
};
export default Coinbase;
