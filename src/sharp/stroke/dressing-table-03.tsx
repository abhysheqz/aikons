import React from "react";
const DressingTable_03: React.FC<
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
        d="M22 13H2v6h20zM11 16h2M18.5 19l1.5 3M5.5 19 4 22M4 13V2M20 13V2"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M4 3.5h4.5c2-2 5-2 7 0H20"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m8.5 7.5 2-2M9 10.5l4-4"
      />
    </svg>
  );
};
export default DressingTable_03;
