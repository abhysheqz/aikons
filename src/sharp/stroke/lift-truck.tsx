import React from "react";
const LiftTruck: React.FC<
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
        d="M7 17.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM17 17.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM4 8h3l3 4h5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 15V4h6l5 4v7m-8 2.5h5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M20 4v9m0 0h-3m3 0v4.99q.001.01.01.01H22"
      />
    </svg>
  );
};
export default LiftTruck;
