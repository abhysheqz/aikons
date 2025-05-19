import React from "react";
const TextAllCaps: React.FC<
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
        d="M10 21H6M18 21h-4M8.5 3v18M15.5 3v18M2 5.5V4a1 1 0 0 1 1-1h7M14 3h7a1 1 0 0 1 1 1v1.5"
      />
    </svg>
  );
};
export default TextAllCaps;
