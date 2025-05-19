import React from "react";
const Building_02: React.FC<
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
        d="M19 22V4a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v18M3 22h18"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.5 22v-4a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v4M14 6h-4m4 3.5h-4m4 3.5h-4"
      />
    </svg>
  );
};
export default Building_02;
