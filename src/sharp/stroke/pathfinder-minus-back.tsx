import React from "react";
const PathfinderMinusBack: React.FC<
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
        d="M1.998 12v3h3.976M1.998 5V2H4.98m6.959 0h2.982v4M1.998 7v3m7.953-8H6.969"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M21.87 9.034h-6.884v5.962H8.928v6.995q0 .01.01.01h13.049a.01.01 0 0 0 .01-.01L21.88 9.044a.01.01 0 0 0-.01-.01Z"
      />
    </svg>
  );
};
export default PathfinderMinusBack;
