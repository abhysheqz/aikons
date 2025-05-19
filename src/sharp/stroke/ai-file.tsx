import React from "react";
const AiFile: React.FC<
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
        d="M18.988 11.004 19.001 2h-8.996L3.004 8.987v13.015h7.986"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="m3.5 9 6.5.002V2.5M16.8 14h.4l.88 2.92 2.92.88v.4l-2.92.88L17.2 22h-.4l-.88-2.92L13 18.2v-.4l2.92-.88z"
      />
    </svg>
  );
};
export default AiFile;
