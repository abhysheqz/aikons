import React from "react";
const TextSmallcaps: React.FC<
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
        d="M10 18H6M8 3v15M2 5V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1M19.5 21h-3m1.5-8v8m-4-6.5V14a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v.5"
      />
    </svg>
  );
};
export default TextSmallcaps;
