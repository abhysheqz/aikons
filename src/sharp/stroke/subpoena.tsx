import React from "react";
const Subpoena: React.FC<
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
        d="M3 2v20h18V2z"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="m3 2 4 5h10l4-5" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m11.499 15-3.5 3.5m4-8 4 4-2.5 2.5-4-4z"
      />
    </svg>
  );
};
export default Subpoena;
