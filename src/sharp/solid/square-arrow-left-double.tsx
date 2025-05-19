import React from "react";
const SquareArrowLeftDouble: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm8.563 6.244-1.129-.988L6.502 12l3.932 4.494 1.129-.988L8.495 12zm5.5 0-1.129-.988L12.002 12l3.932 4.494 1.129-.988L13.995 12z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareArrowLeftDouble;
