import React from "react";
const Android: React.FC<
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
        d="M20 11v6M15 19v3M9 19v3M4 11v6M10 4 8.5 2M14 4l1.5-2M6.5 10h11M6.5 9.5a5.5 5.5 0 1 1 11 0V18a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1z"
      />
    </svg>
  );
};
export default Android;
