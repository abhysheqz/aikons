import React from "react";
const Cabinet_01: React.FC<
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
        d="M11.25 2H5a4 4 0 0 0-4 4v9a4 4 0 0 0 3.619 3.982l-.567 1.702a1 1 0 0 0 1.897.633L6.721 19H17.28l.773 2.317a1 1 0 0 0 1.897-.633l-.567-1.702A4 4 0 0 0 23 15V6a4 4 0 0 0-4-4h-6.25v12.75H21V15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-.25h8.25zM9 7.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V8A.75.75 0 0 1 9 7.25m6 0a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Cabinet_01;
