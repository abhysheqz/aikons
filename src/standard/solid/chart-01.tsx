import React from "react";
const Chart_01: React.FC<
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
        d="M2.75 8.998c0-.966.784-1.75 1.75-1.75h1c.966 0 1.75.784 1.75 1.75v10a1.75 1.75 0 0 1-1.75 1.75h-1a1.75 1.75 0 0 1-1.75-1.75zM9.75 5c0-.966.784-1.75 1.75-1.75h1c.966 0 1.75.784 1.75 1.75v14a1.75 1.75 0 0 1-1.75 1.75h-1A1.75 1.75 0 0 1 9.75 19zM16.75 11.998c0-.966.784-1.75 1.75-1.75h1c.966 0 1.75.784 1.75 1.75v7a1.75 1.75 0 0 1-1.75 1.75h-1a1.75 1.75 0 0 1-1.75-1.75z"
      />
    </svg>
  );
};
export default Chart_01;
