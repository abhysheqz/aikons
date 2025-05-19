import React from "react";
const PencilEdit_01: React.FC<
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
        d="m14 7-9 9-1 4 4-1 9-9m-3-3 3-3 3 3-3 3m-3-3 3 3"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M11 20h7" />
    </svg>
  );
};
export default PencilEdit_01;
