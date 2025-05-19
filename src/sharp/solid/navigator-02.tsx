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
        fill="currentColor"
        fillRule="evenodd"
        d="M21 5H3V3h18zM3 19h18v2H3z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M11 12 3 7.5 4.778 12l-1.777 4.5z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18 11h3v2h-3zM13 11h3v2h-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Navigator_02;
