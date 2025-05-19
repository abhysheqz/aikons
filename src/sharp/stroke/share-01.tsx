import React from "react";
const Share_01: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M9.5 4.5h-7v16h16v-4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M21.5 9 16 3.5V7h-3.5a5 5 0 0 0-5 5v2.5s2-3.5 5.571-3.5H16v3.5z"
      />
    </svg>
  );
};
export default Share_01;
