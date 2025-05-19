import React from "react";
const SquareArrowRight_02: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zm8.47 7.22a.75.75 0 0 1 1.06 0l2.486 2.486a.75.75 0 0 1 .014 1.075l-2.5 2.5a.75.75 0 0 1-1.06-1.061l1.22-1.22H8a.75.75 0 0 1 0-1.5h6.19l-1.22-1.22a.75.75 0 0 1 0-1.06"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareArrowRight_02;
