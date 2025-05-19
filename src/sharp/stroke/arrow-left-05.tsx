import React from "react";
const ArrowLeft_05: React.FC<
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
        d="M3.999 6v12M11.999 12h8"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="m6.999 12 5 4V8z" />
    </svg>
  );
};
export default ArrowLeft_05;
