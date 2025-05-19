import React from "react";
const Hold_04: React.FC<
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
        d="M14 7V6a1.5 1.5 0 0 0-3 0v.5m3 .5v2.5M14 7a1.5 1.5 0 0 1 3 0v3.121M11 6.5V9m0-2.5a1.5 1.5 0 0 0-3 0V7m0 4.5V7m0 0-3.121 3.121A3 3 0 0 0 4 12.243v.349a3 3 0 0 0 .504 1.664l2.605 3.908A3 3 0 0 0 9.606 19.5H17a3 3 0 0 0 3-3v-8a1.5 1.5 0 0 0-3 0"
      />
    </svg>
  );
};
export default Hold_04;
