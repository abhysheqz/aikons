import React from "react";
const Motion_02: React.FC<
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
        d="M10.25 10.25h12.5v12.5h-12.5zM1.25 1.25h9v2h-7v7h-2z"
      />
      <path
        fill="currentColor"
        d="M5.25 5.25h10.5v2.864h-1.91v-.955H7.16v6.682h.954v1.909H5.25z"
      />
    </svg>
  );
};
export default Motion_02;
