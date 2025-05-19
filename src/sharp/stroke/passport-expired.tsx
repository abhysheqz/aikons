import React from "react";
const PassportExpired: React.FC<
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
        d="M13 4H2v18h20V11"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M5 17.5c1.208-2.581 5.712-2.75 7 0m-1.5-7a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM16 2l3 3m0 0 3 3m-3-3-3 3m3-3 3-3"
      />
    </svg>
  );
};
export default PassportExpired;
