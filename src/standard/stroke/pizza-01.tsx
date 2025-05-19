import React from "react";
const Pizza_01: React.FC<
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
        d="M20.15 15.723a.964.964 0 0 0 .67-1.132c-.672-2.92-1.982-5.445-3.974-7.437S12.328 3.85 9.41 3.179a.965.965 0 0 0-1.132.67L3.056 20.82a.1.1 0 0 0 .125.125z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 6c3 1 6.07 2.833 8 5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13.009 12H13"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13.009 12H13"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.5 14A2.5 2.5 0 0 0 8 11.5c0-1.025-.5-2-1.5-2.5M15 17a2.52 2.52 0 0 0-2.475-2C11.131 15 10 16.12 10 17.5c0 .563.188 1.082.505 1.5"
      />
    </svg>
  );
};
export default Pizza_01;
