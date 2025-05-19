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
        fill="currentColor"
        fillRule="evenodd"
        d="M17 2.25H4A2.75 2.75 0 0 0 1.25 5v15A2.75 2.75 0 0 0 4 22.75h15A2.75 2.75 0 0 0 21.75 20v-9.568l-.909.909a2.25 2.25 0 0 1-3.182 0l-2.5-2.5A2.25 2.25 0 0 1 16.75 5H17zm2.798 17.571c0 .54-.437.976-.977.976H6.336l7.51-6.758a2 2 0 0 1 2.447-.178l3.505 2.337zM7.5 10.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.25 1.25a1 1 0 0 1 1 1v4h1.5a1 1 0 0 1 .707 1.707l-2.5 2.5a1 1 0 0 1-1.414 0l-2.5-2.5a1 1 0 0 1 .707-1.707h1.5v-4a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ImageDownload;
