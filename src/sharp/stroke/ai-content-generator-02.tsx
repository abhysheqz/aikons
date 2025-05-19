import React from "react";
const AiContentGenerator_02: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M11 20H2V2h18v8.5M17.8 14h.4l.88 2.92 2.92.88v.4l-2.92.88L18.2 22h-.4l-.88-2.92L14 18.2v-.4l2.92-.88z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M11 7H7v1m4-1h4v1m-4-1v8m0 0h-1m1 0h1"
      />
    </svg>
  );
};
export default AiContentGenerator_02;
