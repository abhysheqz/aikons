import React from "react";
const TimeSetting_03: React.FC<
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
        d="M15 19.5h4.5V15l2.495-3L19.5 9V4.5H15L12 2 8.996 4.5h-4.5V9L2 12l2.496 3v4.5h4.5L12 22z"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M12 7.5V12l3 1.5" />
    </svg>
  );
};
export default TimeSetting_03;
