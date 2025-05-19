import React from "react";
const ImageCrop: React.FC<
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
        d="M3.25 4.75V20c0 .414.336.75.75.75h.11l10.3-9.695 5.994 3.813.346.222V4a.75.75 0 0 0-.75-.75H4.75V2h-1.5v1.25H2v1.5zm16 16H6.299l8.29-7.804 6.161 3.924v2.38H22v1.5h-1.25V22h-1.5zM9 7a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ImageCrop;
