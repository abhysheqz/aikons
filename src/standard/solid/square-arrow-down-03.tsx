import React from "react";
const SquareArrowDown_03: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zm8.03 12.78 2.5-2.5a.75.75 0 1 0-1.06-1.06l-1.22 1.22V7a.75.75 0 0 0-1.5 0v5.19l-1.22-1.22a.75.75 0 1 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0M7.25 17c0 .414.336.75.75.75h8a.75.75 0 0 0 0-1.5H8a.75.75 0 0 0-.75.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareArrowDown_03;
