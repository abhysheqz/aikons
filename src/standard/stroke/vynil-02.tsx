import React from "react";
const Vynil_02: React.FC<
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
        d="M14 3.332A9.5 9.5 0 1 0 11.5 22c4.736 0 8.78-3.466 9.5-8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M22 5.5c-1.994 0-3-3.5-3-3.5v7m0 .5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
      />
    </svg>
  );
};
export default Vynil_02;
