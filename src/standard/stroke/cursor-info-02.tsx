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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m4.6 2.03 15.117 5.815a.44.44 0 0 1-.018.83l-6.56 2.186a.44.44 0 0 0-.278.278l-2.187 6.56a.44.44 0 0 1-.83.018L4.03 2.6a.44.44 0 0 1 .57-.57Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 21.99V22m-2-6.002c0-1.104.895-1.998 2-1.998a1.999 1.999 0 0 1 1.363 3.46c-.606.563-1.363 1.206-1.363 2.034"
      />
    </svg>
  );
};
export default CursorInfo_02;
