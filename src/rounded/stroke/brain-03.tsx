import React from "react";
const Brain_03: React.FC<
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
        d="M12 19V5a3 3 0 1 0-6 0 1 1 0 0 1-1 1 3 3 0 0 0 0 6 3 3 0 1 0 0 6 1 1 0 0 1 1 1 3 3 0 1 0 6 0ZM12 19V5a3 3 0 1 1 6 0 1 1 0 0 0 1 1 3 3 0 1 1 0 6 3 3 0 1 1 0 6 1 1 0 0 0-1 1 3 3 0 1 1-6 0Z"
      />
    </svg>
  );
};
export default Brain_03;
