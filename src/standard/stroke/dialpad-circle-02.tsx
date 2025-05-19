import React from "react";
const DialpadCircle_02: React.FC<
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
        d="M3 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM3 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM10 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM10 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM17 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM17 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"
      />
    </svg>
  );
};
export default DialpadCircle_02;
