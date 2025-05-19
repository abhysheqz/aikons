import React from "react";
const Briefcase_03: React.FC<
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
        d="M3.5 12v7.5a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V12"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m14 13.5 6.758-1.802a1 1 0 0 0 .743-.966V7a1 1 0 0 0-1-1h-17a1 1 0 0 0-1 1L2.5 10.732a1 1 0 0 0 .742.966L10 13.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m15.5 6-.378-2.641a1 1 0 0 0-.99-.859H9.867a1 1 0 0 0-.99.859L8.499 6M14 12h-4v2a2 2 0 0 0 4 0z"
      />
    </svg>
  );
};
export default Briefcase_03;
