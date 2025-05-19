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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 11v6M15 19v3M9 19v3M4 11v6M10 4 8.5 2M14 4l1.5-2M6.5 10h11"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6.5 9.5a5.5 5.5 0 1 1 11 0v9.48a.02.02 0 0 1-.02.02H6.52a.02.02 0 0 1-.02-.02z"
      />
    </svg>
  );
};
export default Android;
