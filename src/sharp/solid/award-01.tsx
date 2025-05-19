import React from "react";
const Award_01: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="M11 18v-6h2v6z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.25 22a4.75 4.75 0 0 1 9.5 0v.75h-9.5zM19.75 5.038c0 4.263-3.474 7.712-7.75 7.712S4.25 9.301 4.25 5.038V1.25h15.5z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.25 4h-4v1c0 3.3 1.376 5.503 2.53 6.695l1.437-1.39C4.475 9.537 3.534 8.132 3.303 6H5.25zM18.75 4h4v1c0 3.3-1.376 5.503-2.53 6.695l-1.437-1.39c.742-.768 1.683-2.173 1.914-4.305H18.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Award_01;
