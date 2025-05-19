import React from "react";
const Alpha: React.FC<
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
        d="M17.4 4c.45 5.333-1.8 16-7.768 16C5.969 20 3 16.418 3 12s2.97-8 6.632-8c8.668.889 4.168 16 9.906 16C20.602 20 21 19.111 21 18.222"
      />
    </svg>
  );
};
export default Alpha;
