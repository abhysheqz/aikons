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
        d="M21.25 5.5v10.11l-.314-.22-4.225-3.073a2.75 2.75 0 0 0-3.394.125l-9.613 8.14A2.74 2.74 0 0 1 2.75 18.5V4.25H2a.75.75 0 1 1 0-1.5h.75V2a.75.75 0 0 1 1.5 0v.75H18.5a2.75 2.75 0 0 1 2.75 2.75M22 21.25a.75.75 0 0 0 0-1.5h-.75v-2.31l-1.191-.834-4.23-3.076a1.25 1.25 0 0 0-1.543.057L5.25 21.24q.123.01.25.011h14.25V22a.75.75 0 0 0 1.5 0v-.75zM9 7a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ImageCrop;
