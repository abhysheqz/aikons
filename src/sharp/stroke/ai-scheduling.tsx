import React from "react";
const AiScheduling: React.FC<
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
        d="M18 2v3M6 2v3M2.5 3.5h19V22h-19zM2.5 8h19"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M11.8 11h.4l.88 2.92 2.92.88v.4l-2.92.88L12.2 19h-.4l-.88-2.92L8 15.2v-.4l2.92-.88z"
      />
    </svg>
  );
};
export default AiScheduling;
