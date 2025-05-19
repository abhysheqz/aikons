import React from "react";
const LinkCircle: React.FC<
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
      <path stroke="currentColor" strokeWidth={1.5} d="M21 12a9 9 0 1 1-9-9" />
      <path
        fill="currentColor"
        d="M21 3h.75v-.75H21zm-.53-.53-6 6 1.06 1.06 6-6zm.53-.22h-6v1.5h6zM21.75 9V3h-1.5v6z"
      />
    </svg>
  );
};
export default LinkCircle;
