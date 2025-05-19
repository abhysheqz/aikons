import React from "react";
const Scheme: React.FC<
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
        d="M22 22v-5h-5v5zM7 22v-5H2v5zM7 7V2H2v5zM22 7V2h-5v5z"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M14.5 14.5v-5h-5v5z" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.5 14V7.045M10 4.5h7m2.5 5.5v7m-4-1.5-1-1"
      />
    </svg>
  );
};
export default Scheme;
