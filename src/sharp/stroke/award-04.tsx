import React from "react";
const Award_04: React.FC<
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
        d="M19 5.5 12 2 5 5.5v8l7 3.5 7-3.5z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 14.5V22l-5-2-5 2v-7.5"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="m8.5 9.5 2 2 5-4.5" />
    </svg>
  );
};
export default Award_04;
