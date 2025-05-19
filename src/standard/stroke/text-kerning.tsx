import React from "react";
const TextKerning: React.FC<
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
        d="m20 18 2 2-2 2m1.29-2H12M22 14.5l-3.5-10h-1l-3.5 10m1.293-3.636h5.414M14.5 3l-5 13M10 4.5l-4 10-4-10"
      />
    </svg>
  );
};
export default TextKerning;
