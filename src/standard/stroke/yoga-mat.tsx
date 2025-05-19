import React from "react";
const YogaMat: React.FC<
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
        d="M6 13.5C6 15.012 7 16 8.5 16c2 0 2.666-1.898 2-3.5-.677-1.629-2.126-2.5-4-2.5a4.5 4.5 0 1 0 0 9h7.167a1 1 0 0 0 .6-.2L22 13h-4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m10 15.5 8-6c0-1-.056-1.48-.406-2.125A4.55 4.55 0 0 0 13.588 5c-.933 0-1.801.279-2.523.757L4 10.75"
      />
    </svg>
  );
};
export default YogaMat;
