import React from "react";
const File_01: React.FC<
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
        d="m3.25 1.25.001 21.5h10.11l7.389-7.38V1.25zM18.8 14.54l-6.238 6.255V14.54zM7.25 5.25h9.5v1.5h-9.5zm5.5 4h-5.5v1.5h5.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default File_01;
