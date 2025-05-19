import React from "react";
const CapcutRectangle: React.FC<
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
        d="m11 12-4 2.5v1a1 1 0 0 0 1 1h6.5a1 1 0 0 0 1-1v-1.17M11 12 7 9.5v-1a1 1 0 0 1 1-1h6.5a1 1 0 0 1 1 1v1.17M11 12l4.5-2.33M11 12l4.5 2.33M18 8.25l-2.5 1.42m2.5 6.08-2.5-1.42"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.5 4.5a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2z"
      />
    </svg>
  );
};
export default CapcutRectangle;
