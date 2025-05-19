import React from "react";
const Honor: React.FC<
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
        d="M2.5 3.002h19"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M4.5 3v12.98l7.436 5.003a.1.1 0 0 0 .112 0l7.452-5.002V3"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.5 13.002h-5m5-5h-5"
      />
    </svg>
  );
};
export default Honor;
