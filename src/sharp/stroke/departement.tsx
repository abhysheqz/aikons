import React from "react";
const Departement: React.FC<
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
        d="M3 22h18V6.5L12 2 3 6.5z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10 13H7m10 0h-3m-4-4H7m3 8H7m10-8h-3m3 8h-3"
      />
    </svg>
  );
};
export default Departement;
