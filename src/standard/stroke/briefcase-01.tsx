import React from "react";
const Briefcase_01: React.FC<
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
        d="M14 12h-4v2a2 2 0 1 0 4 0z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m3.499 12-.002 7.5a2 2 0 0 0 2 2h13.002a2 2 0 0 0 2-2V12"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m15.5 6-.377-2.641a1 1 0 0 0-.99-.859H9.867a1 1 0 0 0-.99.859L8.5 6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 14H6.37a1 1 0 0 1-.65-.24L2.85 11.3a1 1 0 0 1-.35-.76V7a1 1 0 0 1 1-1h17a1 1 0 0 1 1 1v3.54a1 1 0 0 1-.35.76l-2.87 2.46a1 1 0 0 1-.65.24H14"
      />
    </svg>
  );
};
export default Briefcase_01;
