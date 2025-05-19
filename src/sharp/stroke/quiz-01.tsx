import React from "react";
const Quiz_01: React.FC<
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
        strokeWidth={1.5}
        d="M4.413 19.357c0 .111.09.2.2.2h4.29l2.957 2.384a.2.2 0 0 0 .284 0l2.794-2.383h4.436a.2.2 0 0 0 .2-.2v-4.22l2.368-2.983a.2.2 0 0 0 0-.284l-2.367-2.983V4.652a.2.2 0 0 0-.201-.201h-4.245l-3.002-2.394a.2.2 0 0 0-.284 0L8.842 4.45H4.614a.2.2 0 0 0-.201.2v4.22l-2.354 2.983a.2.2 0 0 0 0 .284l2.354 2.983z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M10 9a2 2 0 1 1 3.683 1.08C13.085 11.01 12 12.5 12 12.5v1M11.992 17h.009"
      />
    </svg>
  );
};
export default Quiz_01;
