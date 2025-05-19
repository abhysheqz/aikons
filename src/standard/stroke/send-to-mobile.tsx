import React from "react";
const SendToMobile: React.FC<
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
        d="M19 12.034h-7M17 9l3 3-3 3M17 18v2.5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 4 20.5v-17A1.5 1.5 0 0 1 5.5 2h10A1.5 1.5 0 0 1 17 3.5v2.25"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
        d="M10.5 19h.01"
      />
    </svg>
  );
};
export default SendToMobile;
