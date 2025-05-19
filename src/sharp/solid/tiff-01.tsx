import React from "react";
const Tiff_01: React.FC<
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
        d="m3.25 13.75.001-12.5h10.11l7.389 7.38v5.12zM18.8 9.46l-6.238-6.255V9.46zM3.25 15.25h5v1.5H6.5v6H5v-6H3.25zm7.5 0v7.5h-1.5v-7.5zm1 0h4v1.5h-2.5v1.5h2.5v1.5h-2.5v3h-1.5zm5 0h4v1.5h-2.5v1.5h2.5v1.5h-2.5v3h-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Tiff_01;
