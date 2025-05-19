import React from "react";
const Briefcase_04: React.FC<
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
        strokeWidth={2}
        d="M12 11h.009"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.504 12v7.5a2 2 0 0 0 2 2H18.5a2 2 0 0 0 2-2V12"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m15.5 6-.377-2.641a1 1 0 0 0-.99-.859H9.867a1 1 0 0 0-.99.859L8.5 6"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.5 6h-17a1 1 0 0 0-1 1v3.465a1 1 0 0 0 .445.832l3.803 2.535a1 1 0 0 0 .555.168h9.394a1 1 0 0 0 .555-.168l3.803-2.535a1 1 0 0 0 .445-.832V7a1 1 0 0 0-1-1Z"
      />
    </svg>
  );
};
export default Briefcase_04;
