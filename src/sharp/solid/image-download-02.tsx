import React from "react";
const ImageDownload_02: React.FC<
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
        d="M1.75 1.75h13.835v2.068l-.75-.75-3.182 3.182 6.182 6.182 4.414-4.414V22.25H1.75zm7.247 8.254 5.25 5.25L17 12.502l3.298 2.931v4.865H3.7V15.3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m20.835 4.836 1.414 1.414-4.414 4.414L13.42 6.25l1.414-1.414 2 2V1.75h2v5.086z"
      />
    </svg>
  );
};
export default ImageDownload_02;
