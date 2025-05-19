import React from "react";
const RightAngle: React.FC<
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
        d="M3 5c.393-.405 1.44-2 2-2s1.607 1.595 2 2M19 17c.405.393 2 1.44 2 2s-1.595 1.607-2 2M5 12h1c2.828 0 4.243 0 5.121.879C12 13.757 12 15.172 12 18v1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 19H11c-2.828 0-4.243 0-5.121-.879C5 17.243 5 15.828 5 13V3"
      />
    </svg>
  );
};
export default RightAngle;
