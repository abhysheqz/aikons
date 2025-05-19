import React from "react";
const SmartPhoneLandscape_02: React.FC<
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
        d="M2 7v10a1.5 1.5 0 0 0 1.5 1.5h17A1.5 1.5 0 0 0 22 17V7a1.5 1.5 0 0 0-1.5-1.5h-17A1.5 1.5 0 0 0 2 7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 10v4l1-.5v-3z"
      />
    </svg>
  );
};
export default SmartPhoneLandscape_02;
