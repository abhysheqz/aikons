import React from "react";
const StrokeCenter: React.FC<
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
        fillRule="evenodd"
        d="M2 1.25h3.75V12h1.5V1.25H11a.75.75 0 0 1 .75.75v10.25H22a.75.75 0 0 1 .75.75v3.75H12v1.5h10.75V22a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75V2A.75.75 0 0 1 2 1.25m5 13a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default StrokeCenter;
