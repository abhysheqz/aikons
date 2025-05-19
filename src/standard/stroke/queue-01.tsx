import React from "react";
const Queue_01: React.FC<
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
        d="M6 14h12M6 10h12M6 6h12M3 14v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2"
      />
    </svg>
  );
};
export default Queue_01;
