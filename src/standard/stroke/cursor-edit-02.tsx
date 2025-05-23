import React from "react";
const CursorEdit_02: React.FC<
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
        d="m8.025 7.527 13.228 5.087a.386.386 0 0 1-.017.726l-5.739 1.913a.39.39 0 0 0-.244.244l-1.913 5.74a.386.386 0 0 1-.726.016L7.527 8.025a.386.386 0 0 1 .498-.498Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.5 4h-8M4 5.5v8M5.5 2.5h-3v3h3zM5.5 13.5h-3v3h3zM16.5 2.5h-3v3h3z"
      />
    </svg>
  );
};
export default CursorEdit_02;
