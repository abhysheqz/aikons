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
        strokeWidth={1.5}
        d="M10.8 12 6 14.5v2h9.602v-2M10.8 12 18 8.25M10.8 12 6 9.5v-2h9.602v2M10.8 12l7.2 3.75"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 3h18v18H3z"
      />
    </svg>
  );
};
export default CapcutRectangle;
