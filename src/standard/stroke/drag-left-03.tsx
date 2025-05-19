import React from "react";
const DragLeft_03: React.FC<
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
        d="M10.527 22v-1.5l-3.32-5.275a1.35 1.35 0 0 1 .006-1.445 1.34 1.34 0 0 1 1.987-.306L11.027 15V6.247a1.247 1.247 0 1 1 2.493 0V13.5m2.493.5v-2a1.5 1.5 0 0 0-1.5-1.5h-.494m4.488 4V13a1.5 1.5 0 0 0-1.5-1.5h-.495m2.493 1h.495A1.5 1.5 0 0 1 21 14v3.169a4 4 0 0 1-.798 2.397l-.699.934V22"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.077 8.5a3.5 3.5 0 1 0-3.608 0M8.5 5.5H4M5.5 3 3 5.5 5.5 8"
      />
    </svg>
  );
};
export default DragLeft_03;
