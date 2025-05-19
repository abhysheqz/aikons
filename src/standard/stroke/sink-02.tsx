import React from "react";
const Sink_02: React.FC<
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
        d="m9 16.5.642 3.532a2.396 2.396 0 0 0 4.716 0L15 16.5M12 9V3.5a1.5 1.5 0 0 1 3 0M9 9V7a1 1 0 0 0-1-1H7M15 6.5V9"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 17a8 8 0 0 0 7.938-7.002C20.007 9.45 19.552 9 19 9H5c-.552 0-1.007.45-.938.998A8 8 0 0 0 12 17Z"
      />
    </svg>
  );
};
export default Sink_02;
