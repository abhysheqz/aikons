import React from "react";
const Pacman_01: React.FC<
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
        strokeWidth={2}
        d="M22 12h-.009m-3.982 0H18M10.512 7.5h-.01"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2 12a9 9 0 0 0 16.5 4.977L12 12l6.5-4.977A9 9 0 0 0 2 12Z"
      />
    </svg>
  );
};
export default Pacman_01;
