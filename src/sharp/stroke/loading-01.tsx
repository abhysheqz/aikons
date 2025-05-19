import React from "react";
const Loading_01: React.FC<
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
        strokeWidth={1.5}
        d="M19 2v3a7 7 0 0 1-7 7M5 2v3a7 7 0 0 0 7 7m0 0a7 7 0 0 1 7 7v3m-7-10a7 7 0 0 0-7 7v3"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 2h18M3 22h18"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M9 22h6v-3a3 3 0 1 0-6 0z"
      />
    </svg>
  );
};
export default Loading_01;
