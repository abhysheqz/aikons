import React from "react";
const SmartPhone_04: React.FC<
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
        d="M19.048 16.492C20.254 15.34 21 13.75 21 11.992s-.746-3.348-1.952-4.5M17 9.742c.603.576.976 1.371.976 2.25s-.373 1.674-.976 2.25M16 7c0-2.357 0-3.536-.732-4.268S13.357 2 11 2H8c-2.357 0-3.536 0-4.268.732S3 4.643 3 7v10c0 2.357 0 3.535.732 4.268S5.643 22 8 22h3c2.357 0 3.536 0 4.268-.732C16 20.535 16 19.357 16 17"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.5 2h-4L8 3h3z"
      />
    </svg>
  );
};
export default SmartPhone_04;
