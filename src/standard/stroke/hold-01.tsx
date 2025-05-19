import React from "react";
const Hold_01: React.FC<
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
        d="M11.5 5.5a1.5 1.5 0 0 0-3 0v8l-2.132-2.081a1.736 1.736 0 0 0-2.487.234 1.74 1.74 0 0 0 .008 2.183L8.5 20.5V22m3-16.5v6m0-6v-2a1.5 1.5 0 0 1 3 0v2m4 16.5v-1.5l1.123-1.404a4 4 0 0 0 .877-2.5V7.5a1.5 1.5 0 0 0-3 0m0 5v-5m-3-2v6m0-6a1.5 1.5 0 0 1 3 0v2"
      />
    </svg>
  );
};
export default Hold_01;
