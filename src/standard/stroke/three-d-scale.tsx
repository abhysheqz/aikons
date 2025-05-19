import React from "react";
const ThreeDScale: React.FC<
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
        d="m12 13 5 4.5M12 13l-5 4.5m5-4.5V8"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.5 3.5 12 2 9.5 3.5l-.001 3L12 8l2.5-1.5zM7 17.5 4.5 16 2 17.5 2 20.5 4.5 22 7 20.5zM22 17.5 19.5 16 17 17.5l-.001 3 2.5 1.5 2.5-1.5z"
      />
    </svg>
  );
};
export default ThreeDScale;
