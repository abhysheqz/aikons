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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8.009 14H8m4 0h-.009m4.01 0h-.009"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 6H6a2 2 0 0 0-2 2v14M16 6h2a2 2 0 0 1 2 2v14M2.5 22h7m0 0v-3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3m-5 0h5m0 0h7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 4.5V6m0 0v1.5M12 6h1.5M12 6h-1.5M9 2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Z"
      />
    </svg>
  );
};
export default Hospital_02;
