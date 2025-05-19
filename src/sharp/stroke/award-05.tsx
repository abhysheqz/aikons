import React from "react";
const Award_05: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.5 9.5a7.5 7.5 0 1 0 15 0 7.5 7.5 0 0 0-15 0"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="m8.5 9.5 2 2 5-4.5" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 15v7l-5-2.5L7 22v-7"
      />
    </svg>
  );
};
export default Award_05;
