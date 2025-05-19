import React from "react";
const DeleteColumn: React.FC<
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
        d="m21.5 15-3-3m0 0-3-3m3 3-3 3m3-3 3-3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9 21.5v-19M2.5 15.5H9m-6.5-7H9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21.5 6v-.5a3 3 0 0 0-3-3h-13a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h13a3 3 0 0 0 3-3V18"
      />
    </svg>
  );
};
export default DeleteColumn;
