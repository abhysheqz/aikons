import React from "react";
const SwipeLeft_07: React.FC<
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
        d="M14.001 12.855V11a1.5 1.5 0 0 0-1.5-1.5h-1.5m6 4V12a1.5 1.5 0 0 0-1.5-1.5h-1.267M11 9.5v2.421m0-2.421v-5a1.5 1.5 0 0 0-3 0v10l-2.308-2.163a1.683 1.683 0 0 0-2.423 2.26l4.14 6.48A2 2 0 0 0 9.096 22H17a3 3 0 0 0 3-3v-6a1.5 1.5 0 0 0-1.5-1.5h-1.176M15 4.5 17.5 2M15 4.5 17.5 7M15 4.5h6"
      />
    </svg>
  );
};
export default SwipeLeft_07;
