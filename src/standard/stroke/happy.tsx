import React from "react";
const Happy: React.FC<
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
      <circle
        cx={12}
        cy={12}
        r={10}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 15a5 5 0 0 0 4 2 5 5 0 0 0 4-2M15 7.5s-1 1.2-1 2c.75-.8 2.25-.8 3 0M9 7.5s1 1.2 1 2c-.75-.8-2.25-.8-3 0"
      />
    </svg>
  );
};
export default Happy;
