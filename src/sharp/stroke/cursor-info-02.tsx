import React from "react";
const CursorInfo_02: React.FC<
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
        d="m4 2 16 6.222-7.111 2.667L10.222 18zM18 21.99V22m-2-6.002c0-1.104.895-1.998 2-1.998a1.999 1.999 0 0 1 1.363 3.46c-.606.563-1.363 1.206-1.363 2.034"
      />
    </svg>
  );
};
export default CursorInfo_02;
