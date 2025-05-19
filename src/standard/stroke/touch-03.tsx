import React from "react";
const Touch_03: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.871 12.171 9.005 14V4.25a1.75 1.75 0 1 1 3.5 0v6.25H17a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-6.93a2 2 0 0 1-1.664-.89L4.39 14.588a1.74 1.74 0 0 1 2.482-2.417"
      />
    </svg>
  );
};
export default Touch_03;
