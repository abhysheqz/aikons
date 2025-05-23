import React from "react";
const BloodType: React.FC<
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
        strokeWidth={1.5}
        d="M3.5 13.678c0-4.184 3.58-8.319 6.094-10.706a3.463 3.463 0 0 1 4.812 0C16.919 5.36 20.5 9.494 20.5 13.678 20.5 17.78 17.281 22 12 22s-8.5-4.22-8.5-8.322Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m9 15 .84-1.697M15 15l-.84-1.697m-4.32 0C10.72 11.529 11.977 9 12 9s1.28 2.529 2.16 4.303m-4.32 0h4.32"
      />
    </svg>
  );
};
export default BloodType;
