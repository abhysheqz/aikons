import React from "react";
const Navigation_06: React.FC<
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
      <path fill="currentColor" d="m12 2.75-9.75 18.5L12 16.895l9.75 4.352z" />
    </svg>
  );
};
export default Navigation_06;
