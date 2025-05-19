import React from "react";
const More_02: React.FC<
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
        d="M21 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM13.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM6 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM21 12a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM21 4.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM13.5 12a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM13.5 4.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM6 12a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM6 4.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"
      />
    </svg>
  );
};
export default More_02;
