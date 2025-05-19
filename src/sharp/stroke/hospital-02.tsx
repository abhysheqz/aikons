import React from "react";
const Hospital_02: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 22V6h4m12 16V6h-4"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 4v2m0 0v2m0-2h2m-2 0h-2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 10h8V2H8z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 22h18"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8.009 14H8m4 0h-.009m4.01 0h-.009"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M21.998 22h-7.493a.01.01 0 0 1-.01-.01v-3.983a.01.01 0 0 0-.01-.01h-4.98a.01.01 0 0 0-.01.01v3.968a.01.01 0 0 1-.01.01H2"
      />
    </svg>
  );
};
export default Hospital_02;
