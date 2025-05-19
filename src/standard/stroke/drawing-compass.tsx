import React from "react";
const DrawingCompass: React.FC<
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
        fill="currentColor"
        d="M4.317 20.69a.75.75 0 0 0 1.366.62zm14 .62a.75.75 0 0 0 1.366-.62zm-9-11.62-5 11 1.366.62 5-11zm4 .62 5 11 1.366-.62-5-11z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 5V3"
      />
      <circle
        cx={12}
        cy={8}
        r={3}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 13c1.99 3.024 5.28 5 9 5s7.01-1.976 9-5m-9 3.5v3"
      />
    </svg>
  );
};
export default DrawingCompass;
