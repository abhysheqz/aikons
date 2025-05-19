import React from "react";
const Door_01: React.FC<
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
        d="M5 4v16l9 2V2z"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M14 4v16h5V4z" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 13.5v-3M19 20h3M2 20h3"
      />
    </svg>
  );
};
export default Door_01;
