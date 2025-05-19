import React from "react";
const Castle_01: React.FC<
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
        d="M3 22h18M5 22 6.93 8.495a1 1 0 0 0-.284-.849L5 6 4 2h3l1 2.5h2l.5-2.5h3l.5 2.5h2L17 2h3l-1 4-1.646 1.646a1 1 0 0 0-.283.849L19 22"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m9 22 .84-4.196a1 1 0 0 1 .98-.804h2.36a1 1 0 0 1 .98.804L15 22M7 8h10M15 11h2M7 13h2"
      />
    </svg>
  );
};
export default Castle_01;
