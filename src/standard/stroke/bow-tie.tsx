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
        d="M9.5 9c-1-1-3.479-3.218-4.84-2.983-3.547.612-3.547 11.353 0 11.966 1.361.235 3.84-1.988 4.84-2.988M14.5 9c1-1 3.479-3.218 4.84-2.983 3.547.612 3.547 11.353 0 11.966-1.361.235-3.84-1.988-4.84-2.988M13.5 9.003h-3a1 1 0 0 0-1 1v4.002a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4.002a1 1 0 0 0-1-1M9 12.005l-1.5-.002M16.5 12.003l-1.5.002"
      />
    </svg>
  );
};
export default BowTie;
