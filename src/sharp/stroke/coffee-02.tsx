import React from "react";
const Coffee_02: React.FC<
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
        d="M18.251 11H22c0 6-5 6-5 6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.946 21C2.57 17.922 2.073 13.556 2 9h16c-.073 4.556-.57 8.922-3.945 12z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.308 3c-.546.451-1.307 2-1.307 4M7.54 5S7 5.667 7 7m7-2c-.273.226-.501 1.333-.501 2"
      />
    </svg>
  );
};
export default Coffee_02;
