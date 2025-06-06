import React from "react";
const Tools: React.FC<
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
        d="M5 10h2.5l6.5 6.5V19a2 2 0 0 0 2 2h3l-2-2v-2h2l2 2v-3a2 2 0 0 0-2-2h-2.5L10 7.5V5a2 2 0 0 0-2-2H5l2 2v2H5L3 5v3a2 2 0 0 0 2 2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m9 12-5.086 5.086a2 2 0 0 0 0 2.828l.172.172a2 2 0 0 0 2.828 0L12 15m1.5-4.5 5-5m0 0-1-1L20 3l1 1-1.5 2.5z"
      />
    </svg>
  );
};
export default Tools;
