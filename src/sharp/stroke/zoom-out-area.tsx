import React from "react";
const ZoomOutArea: React.FC<
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
        strokeWidth={1.5}
        d="M18.502 18.5 21 21m-1-6.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0ZM16.5 14.5h-4M17.5 3H21v3.5m-18 0V3h3.5m0 18H3v-3.5M10 3h4M3 10v4"
      />
    </svg>
  );
};
export default ZoomOutArea;
