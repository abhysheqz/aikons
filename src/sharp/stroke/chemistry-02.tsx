import React from "react";
const Chemistry_02: React.FC<
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
      <path stroke="currentColor" strokeWidth={1.5} d="M2 9h9.5M22 9h-6.5" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 3v18h17M10 4h7"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11.792 4.734v4.284L8.03 17.017a.01.01 0 0 0 .01.014H18.99a.01.01 0 0 0 .009-.014l-3.786-7.999V4.734"
      />
    </svg>
  );
};
export default Chemistry_02;
