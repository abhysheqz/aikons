import React from "react";
const MilkBottle: React.FC<
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
        d="M14.727 5c.904 0 1.637-.672 1.637-1.5S15.63 2 14.727 2H9.273c-.904 0-1.637.672-1.637 1.5S8.37 5 9.273 5m5.973-.077C16.866 7.894 18 10.377 18 13.777V18c0 3.31-.753 4-4.364 4h-3.272C6.754 22 6 21.31 6 18v-4.223c0-3.4 1.107-5.891 2.727-8.862"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 12c.571.5 2.092.476 2.984.279.622-.137 1.293.024 1.714.485l.825.902a2.12 2.12 0 0 0 1.902.651l1.043-.167c.574-.092 1.145.14 1.536.556C17.223 16 18 16 18 16"
      />
    </svg>
  );
};
export default MilkBottle;
