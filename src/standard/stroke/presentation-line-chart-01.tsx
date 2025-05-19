import React from "react";
const PresentationLineChart_01: React.FC<
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
        d="M21.5 14V5a3 3 0 0 0-3-3h-13a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h13a3 3 0 0 0 3-3Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m8 10.225.697-.915c.878-1.154 2.432-1.062 3.209.19.75 1.21 2.237 1.344 3.134.283L16 8.65M12 17.5V22M7 22l5-3 5 3"
      />
    </svg>
  );
};
export default PresentationLineChart_01;
