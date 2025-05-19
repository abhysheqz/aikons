import React from "react";
const ArrowUp_01: React.FC<
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
        d="M18.593 15.805a1 1 0 0 0 .212-1.398 53.178 53.178 0 0 0-2.457-3.062c-.662-.763-1.396-1.551-2.081-2.157a7.4 7.4 0 0 0-1.04-.787C12.912 8.211 12.477 8 12 8s-.912.21-1.228.401a7.4 7.4 0 0 0-1.039.787c-.685.606-1.42 1.394-2.081 2.156a53 53 0 0 0-2.457 3.063A1 1 0 0 0 6 16h12a1 1 0 0 0 .593-.195"
      />
    </svg>
  );
};
export default ArrowUp_01;
