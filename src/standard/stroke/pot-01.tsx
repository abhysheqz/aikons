import React from "react";
const Pot_01: React.FC<
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
        d="M2 9.5h20M4 9.5l.752 8.272A3 3 0 0 0 7.74 20.5h8.52a3 3 0 0 0 2.988-2.728L20 9.5M4 6.5h16m-11 0 .772-2.316a1 1 0 0 1 .949-.684h2.558a1 1 0 0 1 .949.684L15 6.5"
      />
    </svg>
  );
};
export default Pot_01;
