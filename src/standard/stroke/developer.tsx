import React from "react";
const Developer: React.FC<
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
        d="M15 22v-3.5l2.876.36A1 1 0 0 0 19 17.867V14.5l2-1.5-2-3a8 8 0 1 0-10.5 7.602M6 16.245V22"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m14 9.5 1.5 1.5-1.5 1.5m-6-3L6.5 11 8 12.5m3.5-4-1 5"
      />
    </svg>
  );
};
export default Developer;
