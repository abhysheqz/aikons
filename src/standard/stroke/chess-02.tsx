import React from "react";
const Chess_02: React.FC<
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
        d="M12 11c.617 0 1.5-.5 1.5-.5l.086.086a2 2 0 0 0 2.828 0L17 10l-3-3c0-1-1-2-2-2 .5-1.5 0-3 0-3-1 0-3 .7-3 3.5-.669.334-3 1.5-2.998 4.5.001 2 .505 3.01 1.998 5v4l-.914.914a2 2 0 0 0-.587 1.415V22H18v-.672a2 2 0 0 0-.585-1.414L16.499 19v-1.143c0-.856-.395-1.665-1.071-2.19l-1.85-1.44A4.09 4.09 0 0 1 12 11m0 0c-.874 0-2-1-2-1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M8 19h8"
      />
    </svg>
  );
};
export default Chess_02;
