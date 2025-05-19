import React from "react";
const Navigator_02: React.FC<
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
        d="M20.998 20h-18m0-16h18M9.998 12l-7-4 1.556 4-1.555 4zM20.998 12h-3M15.998 12h-3"
      />
    </svg>
  );
};
export default Navigator_02;
