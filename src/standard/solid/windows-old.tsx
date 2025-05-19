import React from "react";
const WindowsOld: React.FC<
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
        d="m10.25 3.67-5.702.95A2.75 2.75 0 0 0 2.25 7.331v3.918h8zM2.25 12.75v3.915a2.75 2.75 0 0 0 2.298 2.713l5.702.95V12.75zM11.75 20.578l6.798 1.133a2.75 2.75 0 0 0 3.202-2.713V12.75h-10zM21.75 11.25V4.999a2.75 2.75 0 0 0-3.202-2.713L11.75 3.42v7.831z"
      />
    </svg>
  );
};
export default WindowsOld;
