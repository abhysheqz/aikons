import React from "react";
const Grapes: React.FC<
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
        d="M14.83 18a3 3 0 1 1-5.659 0"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.236 13a3 3 0 1 1-4.472 0"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.236 13a3 3 0 1 1-4.472 0"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 10a3 3 0 1 0 6 0 3 3 0 0 0-6 0ZM9 10a3 3 0 1 0 6 0 3 3 0 0 0-6 0ZM3 10a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 7c0-1.667.8-5 4-5"
      />
    </svg>
  );
};
export default Grapes;
