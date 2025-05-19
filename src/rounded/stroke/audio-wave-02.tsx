import React from "react";
const AudioWave_02: React.FC<
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
        d="M3 14V9.5a1.5 1.5 0 1 1 3 0v7a1.5 1.5 0 0 0 3 0v-12a1.5 1.5 0 1 1 3 0v15a1.5 1.5 0 0 0 3 0v-11a1.5 1.5 0 0 1 3 0v7a1.5 1.5 0 0 0 3 0V12"
      />
    </svg>
  );
};
export default AudioWave_02;
