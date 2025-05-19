import React from "react";
const Stamp_01: React.FC<
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
        d="m5 19 .002 3H18.98v-3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M18.87 14.809c2.035 1.083 1.596 3.198 1.596 4.214l-16.964-.03.026-1.709c.074-1.707 2.205-2.823 3.236-3.152 1.386-.587 2.655-1.668 2.89-2.884.38-1.958-.7-2.764-1.191-4.293-.481-1.495-.24-2.167.385-3.309.634-1.155 2.239-1.73 3.35-1.637.901 0 2.485.623 3.24 2.16.823 1.674-.091 3.323-.897 4.899-.329.642-.602 2.356.486 3.527 1.145 1.233 1.314.868 3.842 2.214Z"
      />
    </svg>
  );
};
export default Stamp_01;
