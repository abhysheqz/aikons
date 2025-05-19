import React from "react";
const AppleVisionPro: React.FC<
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
        strokeWidth={1.5}
        d="M6.5 17.5C4 17.5 2 16 2 12.5c0-4 3-6 10-6s10 2 10 6c0 3.5-2 5-4.5 5S13.5 15 12 15s-3 2.5-5.5 2.5Z"
      />
    </svg>
  );
};
export default AppleVisionPro;
