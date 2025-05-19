import React from "react";
const ScreenRotation: React.FC<
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
        d="M2.028 12S1.03 22 11 22l-.997-2M21.972 12S22.97 2 13 2l.997 2M10.6 5 5 10.6l8.4 8.4 5.6-5.6z"
      />
    </svg>
  );
};
export default ScreenRotation;
