import React from "react";
const PictureInPictureExit: React.FC<
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
        d="M11 20H2V4h20v7.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14 14h8v6h-8zM10.988 12.988 6.399 8.362m-.38 3.13V7.98h3.467"
      />
    </svg>
  );
};
export default PictureInPictureExit;
