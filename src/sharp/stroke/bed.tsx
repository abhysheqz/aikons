import React from "react";
const Bed: React.FC<
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
        d="M2 3.5v17M22 8.5v12"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M2 11h20" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 16h4m16 0h-3M6 11v8h13v-8"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M4.5 8.5H9" />
    </svg>
  );
};
export default Bed;
