import React from "react";
const AiBrain_03: React.FC<
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
        strokeLinejoin="bevel"
        strokeWidth={1.5}
        d="m8.258 12.732 1.824-4.705 1.824 4.705m-3.648 0-.948 2.476m.948-2.476h3.648m0 0 1.014 2.476m2.557-7.476v7.625"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M4 16.5a3 3 0 0 0 3 3 2.5 2.5 0 0 0 5 0 2.5 2.5 0 1 0 5 0 3 3 0 0 0 2.567-4.554 3.001 3.001 0 0 0 0-5.893A3 3 0 0 0 17 4.5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0-5 0 3 3 0 0 0-2.567 4.553 3.001 3.001 0 0 0 0 5.893A3 3 0 0 0 4 16.5Z"
      />
    </svg>
  );
};
export default AiBrain_03;
