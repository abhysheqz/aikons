import React from "react";
const Motion_02: React.FC<
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
        d="M22 11v11H11V11zM9 3V2H2v7h1"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M15 8V6H6v9h2" />
    </svg>
  );
};
export default Motion_02;
