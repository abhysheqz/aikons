import React from "react";
const Magnet_01: React.FC<
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
        d="M16 12V9h4v3m-4 0v2a4 4 0 0 1-8 0v-2m8 0h4m0 0v2a8 8 0 1 1-16 0v-2m4 0V9H4v3m4 0H4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 2v4m2-2h-4M8 4H4"
      />
    </svg>
  );
};
export default Magnet_01;
