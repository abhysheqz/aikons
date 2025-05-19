import React from "react";
const WindPower_03: React.FC<
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
        strokeWidth={1.5}
        d="M14 10.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M13.5 2a3 3 0 0 0-3 3v4.178A2 2 0 0 1 12 8.5c.598 0 1.133.262 1.5.677zM13.99 10.319 20 14a3 3 0 0 1-4.098 1.098l-4.165-2.616"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M10.007 10.32 4 14a3 3 0 0 0 4.098 1.098l4.164-2.615"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m13.45 16 .55 6h-4l.55-6"
      />
    </svg>
  );
};
export default WindPower_03;
