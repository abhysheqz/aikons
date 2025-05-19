import React from "react";
const BowTie: React.FC<
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
        d="M9.5 9c-1-1-3.479-3.22-4.84-2.986-3.547.613-3.547 11.363 0 11.976C6.022 18.225 8.5 16 9.5 15"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.5 9c1-1 3.479-3.22 4.84-2.986 3.547.613 3.547 11.363 0 11.976-1.361.235-3.84-1.99-4.84-2.99"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.5 9h-5v6.002h5z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12.002H7M17 12.002h-2"
      />
    </svg>
  );
};
export default BowTie;
