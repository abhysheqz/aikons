import React from "react";
const ArrowRight_05: React.FC<
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
        d="M19.998 6v12M11.998 12h-8"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="m16.998 12-5 4V8z" />
    </svg>
  );
};
export default ArrowRight_05;
