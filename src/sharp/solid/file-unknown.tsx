import React from "react";
const FileUnknown: React.FC<
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
        d="M6.25 3.25a1 1 0 0 0-1 1v1h-2v-1a3 3 0 0 1 3-3c1.56 0 3 1.193 3 2.919 0 .576-.17 1.14-.49 1.62L7.637 7.472A2.3 2.3 0 0 0 7.25 8.75v1h-2v-1c0-.85.252-1.68.723-2.387L7.096 4.68a.9.9 0 0 0 .154-.51c0-.493-.41-.919-1-.919m1 8v1.5h-2v-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m3.25 14 .001 8.75h10.11l7.389-7.38V1.25H9.294A4.04 4.04 0 0 1 10.5 4.169a4.17 4.17 0 0 1-.7 2.313L8.675 8.166a1.05 1.05 0 0 0-.176.584V14zm9.312 6.795L18.8 14.54h-6.237z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FileUnknown;
