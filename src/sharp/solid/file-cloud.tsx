import React from "react";
const FileCloud: React.FC<
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
        d="M5.381 3.714C5.745 2.31 6.986 1.25 8.498 1.25c1.708 0 2.991 1.35 3.196 2.899 1.192.331 2.054 1.451 2.054 2.75 0 1.549-1.217 2.85-2.775 2.85H6.248c-1.682 0-3-1.405-3-3.082 0-1.377.885-2.568 2.133-2.953"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.56 1.25c.562.55.978 1.24 1.207 1.982a4.12 4.12 0 0 1 2.23 3.668c0 2.192-1.73 4.1-4.024 4.1H6.248A4.17 4.17 0 0 1 3.252 9.74l.001 13.009h10.11l7.389-7.38V1.25zm1.004 19.545 6.237-6.255h-6.237z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FileCloud;
