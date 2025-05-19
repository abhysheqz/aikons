import React from "react";
const AngryBird: React.FC<
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
        d="M18.5 9.19C16.988 7.372 14.787 6 12.5 6c-4.142 0-8 4.5-8 8 0 4.142 3.858 7 8 7 .506 0 1.009-.043 1.5-.125"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m13 8.5 4.706 1.5L21 8"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.501 16h1.5l-4.5-3-3.5 3 3.5 3zm0 0h-2.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13.008 12h-.009M20.008 11.5h-.009"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 6c-.267-1-1.44-3-4-3M11 6c-.5-.523-2-1.412-4-.784M2 11l2 3-2 1"
      />
    </svg>
  );
};
export default AngryBird;
