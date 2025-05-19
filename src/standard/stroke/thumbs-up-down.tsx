import React from "react";
const ThumbsUpDown: React.FC<
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
        d="M9.313 13H3a1 1 0 0 1-1-1V7.384a1 1 0 0 1 .257-.67L6.5 2l.344.344a3 3 0 0 1 .45 3.665L7 6.5h4.044a1 1 0 0 1 .933 1.359l-1.73 4.5a1 1 0 0 1-.934.641ZM13.754 11.641a1 1 0 0 1 .933-.641H21a1 1 0 0 1 1 1v4.616a1 1 0 0 1-.257.67L17.5 22l-.896-.896a2 2 0 0 1-.3-2.443L17 17.5h-4.044a1 1 0 0 1-.933-1.359z"
      />
    </svg>
  );
};
export default ThumbsUpDown;
