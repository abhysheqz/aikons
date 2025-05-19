import React from "react";
const Suit_01: React.FC<
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
        d="M12 17.996"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m12 4.998 3.486-2.09A1 1 0 0 1 17 3.766V6.23a1 1 0 0 1-1.514.857zm0 0-3.486-2.09A1 1 0 0 0 7 3.766V6.23a1 1 0 0 0 1.514.857z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m17.046 5 3.983.801a1 1 0 0 1 .786 1.165l-2.511 13.402A2 2 0 0 1 17.338 22H6.658a2 2 0 0 1-1.966-1.632l-2.51-13.4a1 1 0 0 1 .788-1.165L6.998 5"
      />
    </svg>
  );
};
export default Suit_01;
