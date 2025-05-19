import React from "react";
const ArrowTurnForward: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="M4.41 6.773C5.278 5.757 6.537 5 8 5h5a1 1 0 1 1 0 2H8c-.745 0-1.486.388-2.068 1.07C5.35 8.754 5 9.654 5 10.5s.35 1.745.932 2.43C6.514 13.612 7.255 14 8 14h8v-2a1 1 0 0 1 1.707-.707l3 3a1 1 0 0 1 0 1.414l-3 3A1 1 0 0 1 16 18v-2H8c-1.464 0-2.723-.757-3.59-1.773C3.547 13.214 3 11.863 3 10.5s.546-2.714 1.41-3.727"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArrowTurnForward;
