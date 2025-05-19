import React from "react";
const ElectricPlugs: React.FC<
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
        d="M6.478 14.608 5.354 7.304A2 2 0 0 1 7.331 5h9.338a2 2 0 0 1 1.976 2.304l-1.123 7.304A4 4 0 0 1 13.568 18h-3.136a4 4 0 0 1-3.954-3.392Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m12 8.5-2 3h4l-2 3M9 2v3m6-3v3M12 18v4"
      />
    </svg>
  );
};
export default ElectricPlugs;
