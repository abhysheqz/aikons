import React from "react";
const Calculate: React.FC<
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
        d="M21.5 2.5h-19v19h19zM18.5 8h-5M16 5.5v5M10.036 17.536 6.5 14m3.536 0L6.5 17.536M18 17.5h-4M18 14.5h-4M10 8H6"
      />
    </svg>
  );
};
export default Calculate;
