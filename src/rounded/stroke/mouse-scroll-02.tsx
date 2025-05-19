import React from "react";
const MouseScroll_02: React.FC<
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
        d="M12 22c6 0 7.5-4.51 7.5-10S18 2 12 2 4.5 6.51 4.5 12 6 22 12 22Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.988 6.839v4.92M9.996 7.859c.984-1.02 1.584-1.92 2.04-1.856.384-.003.744.596 1.968 1.856M14.004 11.14c-.984 1.02-1.584 1.92-2.04 1.856-.384.003-.744-.595-1.968-1.855"
      />
    </svg>
  );
};
export default MouseScroll_02;
