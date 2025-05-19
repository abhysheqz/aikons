import React from "react";
const ThreeFinger_03: React.FC<
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
        d="M14.5 12.355V4a1.5 1.5 0 0 0-3 0v1m6 8V5.5a1.5 1.5 0 0 0-3 0m-3-.5v6.421M11.5 5a1.5 1.5 0 0 0-3 0v9l-2.307-2.163a1.683 1.683 0 0 0-2.423 2.26l4.14 6.48a2 2 0 0 0 1.685.923h7.906a3 3 0 0 0 3-3v-6A1.5 1.5 0 0 0 19 11h-1.176"
      />
    </svg>
  );
};
export default ThreeFinger_03;
