import React from "react";
const Highlighter: React.FC<
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
        d="m6.678 16.207 2.115 2.115m-2.115-2.115L2.5 20.5h4l2.293-2.178m-2.115-2.115c-.39-.39-.383-1.02-.043-1.455.792-1.014 1.08-1.93 1.164-2.614.093-.752.275-1.565.81-2.1l.892-.89m-.708 9.174c.39.39 1.02.383 1.455.043 1.014-.792 1.93-1.08 2.614-1.164.752-.093 1.565-.275 2.1-.81l.89-.892m0 0-6.35-6.35m6.35 6.35a1 1 0 0 0 1.414 0l4.234-4.234M9.501 9.148a1 1 0 0 1 0-1.414L13.735 3.5"
      />
    </svg>
  );
};
export default Highlighter;
