import React from "react";
const EarRings_01: React.FC<
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
        d="M11.5 10.413a2.8 2.8 0 0 0-1.071-1.04C8.433 8.301 7 9.88 7 9.88s-1.433-1.578-3.429-.508C1.154 10.67.981 15.746 7 18c.997-.373 1.825-.824 2.5-1.323M20.429 12.372c-1.996-1.07-3.429.508-3.429.508s-1.433-1.578-3.429-.508C11.154 13.67 10.981 18.746 17 21c6.02-2.254 5.846-7.331 3.429-8.628"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.5 7.5a1.5 1.5 0 0 1 3 0C18.5 8.648 17 9 17 9v3.5M5.5 4.5a1.5 1.5 0 1 1 3 0C8.5 5.648 7 6 7 6v3.5"
      />
    </svg>
  );
};
export default EarRings_01;
