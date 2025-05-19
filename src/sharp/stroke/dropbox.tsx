import React from "react";
const Dropbox: React.FC<
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
        d="m12 6.503 5.5 3.001-5.5 3.002-5.5-3.002z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.076 3.001 12 6.274 7.924 3 3 6.298l3.435 3.115L3 12.528l4.937 3.48L12 12.553l4.076 3.272L21 12.53l-3.435-3.116L21 6.298z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M5.998 14.859v3.156l6.004 2.982a.01.01 0 0 0 .01 0l6.003-3.013v-3.193"
      />
    </svg>
  );
};
export default Dropbox;
