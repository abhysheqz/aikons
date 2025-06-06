import React from "react";
const Datev: React.FC<
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
        strokeLinecap="square"
        d="M1.25 14.5v-5h1a2.5 2.5 0 0 1 0 5zM5.75 14.5l1.714-5h.572l1.714 5H8.036M18.75 9.5l.857 2.5.857 2.5h.572l1.714-5h-1.714M10.25 9.5h1.5m1.5 0h-1.5m0 0v5M17.25 14.5h-2.5V12m2.5-2.5h-2.5V12m0 0h2.5"
      />
    </svg>
  );
};
export default Datev;
