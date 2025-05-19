import React from "react";
const AiContentGenerator_01: React.FC<
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
        d="M11 21H2V2h18v8.5M17.8 14h.4l.88 2.92 2.92.88v.4l-2.92.88L18.2 22h-.4l-.88-2.92L14 18.2v-.4l2.92-.88zM7 7h8m-8 4.5h8M7 16h4"
      />
    </svg>
  );
};
export default AiContentGenerator_01;
