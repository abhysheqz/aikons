import React from "react";
const Matrix: React.FC<
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
        d="M18 3h4v18h-4M6 21H2V3h4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 8h.009m4.986 0h.01m4.986 0H17M7 12h.009m-.01 4h.01m4.986-4h.01m-.01 4h.01m4.986-4H17m-.01 4H17"
      />
    </svg>
  );
};
export default Matrix;
