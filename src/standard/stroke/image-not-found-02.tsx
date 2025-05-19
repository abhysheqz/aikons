import React from "react";
const ImageNotFound_02: React.FC<
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
        d="m2 2 20 20M21 17V5a2 2 0 0 0-2-2H7m-3.5.677C3.189 4.03 3 4.493 3 5v14a2 2 0 0 0 2 2h14c.507 0 .97-.189 1.323-.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 21c-.48-2.353-1.83-4.44-3.654-5.803C9.096 13.515 6.36 13 3 13"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.5 17.5c.81-.594 1.5-1 2.5-1.5"
      />
    </svg>
  );
};
export default ImageNotFound_02;
