import React from "react";
const LayoutRight: React.FC<
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
        d="M16.003 2.25h5a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-.75.75h-5zM14.003 21.75h-11a.75.75 0 0 1-.75-.75V3a.75.75 0 0 1 .75-.75h11z"
      />
    </svg>
  );
};
export default LayoutRight;
