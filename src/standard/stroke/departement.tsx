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
        d="M5 22h14a2 2 0 0 0 2-2V7.5a2 2 0 0 0-1.106-1.789l-7-3.5a2 2 0 0 0-1.788 0l-7 3.5A2 2 0 0 0 3 7.5V20a2 2 0 0 0 2 2M10 13H8m8 0h-2m-4-4H8m2 8H8m8-8h-2m2 8h-2"
      />
    </svg>
  );
};
export default Departement;
