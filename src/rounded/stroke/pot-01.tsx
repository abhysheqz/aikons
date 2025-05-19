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
        strokeWidth={1.5}
        d="M2 9h20M4 9l.504 5.543c.236 2.592.353 3.887 1.213 4.672.859.785 2.16.785 4.762.785h3.042c2.602 0 3.903 0 4.762-.785.86-.785.977-2.08 1.213-4.672L20 9M4 6h16M9 6l.623-2.057A1.5 1.5 0 0 1 11.016 3h1.969a1.5 1.5 0 0 1 1.392.943L15 6"
      />
    </svg>
  );
};
export default Pot_01;
