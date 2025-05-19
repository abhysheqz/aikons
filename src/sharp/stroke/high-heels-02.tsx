import React from "react";
const HighHeels_02: React.FC<
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
        d="M20 20v-3.5L17 15l-4 3"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="m2 12 1.5 8H5l2-7.5" />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2 7h7V4H2.01a.01.01 0 0 0-.01.01zm0 0v4.951c0 .027.022.05.05.05 2.573.052 4.414-.196 5.825.598 1.66.935 2.6 3.018 4.226 4.687C15.17 20.16 18.368 19.926 22 20"
      />
    </svg>
  );
};
export default HighHeels_02;
