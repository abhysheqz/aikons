import React from "react";
const MoneySavingJar: React.FC<
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
        d="M19.5 22V9L16 5H8L4.5 9v13z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.5 15.683c0 1.23 1.854 2.237 3.633 1.672s1.517-2.23.913-2.884-1.491-.544-2.506-.596c-2.281-.116-2.442-2.303-.595-3.168 1.355-.635 3.093.18 3.293 1.293m-2.267-3v1.478m0 7.242V19"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M18 2v3H6V2z"
      />
    </svg>
  );
};
export default MoneySavingJar;
