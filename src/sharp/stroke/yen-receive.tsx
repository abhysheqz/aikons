import React from "react";
const YenReceive: React.FC<
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
        d="m2 3.5 5.5 6.716m0 0L13 3.5m-5.5 6.716V20.5M3 13h9M3 17h9"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M22 13h-7.057M17 15.5 14.5 13l2.5-2.5"
      />
    </svg>
  );
};
export default YenReceive;
