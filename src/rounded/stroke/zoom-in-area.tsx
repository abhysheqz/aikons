import React from "react";
const ZoomInArea: React.FC<
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
        d="m18.502 19.122 2.498 2.5m-1-6.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0M14.5 13.122v4m2-2h-4M10 3.622h4m-11 7v4m3.5 7a3.5 3.5 0 0 1-3.5-3.5m14.5-14.5a3.5 3.5 0 0 1 3.5 3.5m-18 0a3.5 3.5 0 0 1 3.5-3.5"
      />
    </svg>
  );
};
export default ZoomInArea;
