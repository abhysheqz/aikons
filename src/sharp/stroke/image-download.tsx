import React from "react";
const ImageDownload: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 11v11H3V4h9"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m5 22 10-9 6 4M14 7l3 3 3-3m-3-5v7.5"
      />
    </svg>
  );
};
export default ImageDownload;
