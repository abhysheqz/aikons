import React from "react";
const SortingAz_01: React.FC<
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
        d="M15 9.5h3.5v.5L15 14v.5h3.5M3 14.5 4.997 9H6l2 5.5M10.5 12h2M2 7.5V7a2 2 0 0 1 2-2h14.5l-2-2.5M22 16.5l-.001.402a2 2 0 0 1-1.986 1.995L5.5 19 8 21.5"
      />
    </svg>
  );
};
export default SortingAz_01;
