import React from "react";
const Structure_01: React.FC<
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
        d="M1.292 16.294A1 1 0 0 1 2 16h6a1 1 0 0 1 1 1.002l-.01 4-2-.004L6.997 18H3.002l.006 2.998-2 .004-.008-4a1 1 0 0 1 .292-.708"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 12V9h2v3h6a1 1 0 0 1 1 1v4h-2v-3H6.001L6 17H4l.001-4a1 1 0 0 1 1-1z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.292 16.294A1 1 0 0 1 16 16h6a1 1 0 0 1 1 1.002l-.01 4-2-.004.007-2.998h-3.995l.006 2.998-2 .004-.008-4a1 1 0 0 1 .292-.708"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.25 3A.75.75 0 0 1 8 2.25h8a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75H8A.75.75 0 0 1 7.25 9z"
      />
    </svg>
  );
};
export default Structure_01;
