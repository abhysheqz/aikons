import React from "react";
const EaseCurveControlPoints: React.FC<
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
        d="M21 4c-5 0-7.02 4.042-9 8s-4 8-9 8M10 20h2m3 0h2m0 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM12 4h2M7 4h2M7 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      />
    </svg>
  );
};
export default EaseCurveControlPoints;
