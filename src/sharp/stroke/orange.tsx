import React from "react";
const Orange: React.FC<
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
        d="M20.5 14c0 4.418-3.806 8-8.5 8s-8.5-3.582-8.5-8S7.306 6 12 6s8.5 3.582 8.5 8ZM12 6c0-1.333.6-4 3-4M12 6c-.5-1.167 0-4-6-4 .333 1 1 4 6 4Z"
      />
    </svg>
  );
};
export default Orange;
