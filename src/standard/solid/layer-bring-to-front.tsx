import React from "react";
const LayerBringToFront: React.FC<
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
        d="m3.496 14.822-1.202.542c-1.392.627-1.392 2.644 0 3.27l8.6 3.877a2.69 2.69 0 0 0 2.212 0l8.6-3.876c1.392-.627 1.392-2.644 0-3.27l-1.202-.543-6.781 3.057a4.19 4.19 0 0 1-3.446 0z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.293 1.543a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414L13 4.664v5.586a1 1 0 1 1-2 0V4.664L9.707 5.957a1 1 0 0 1-1.414-1.414z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.57 6.986 2.293 9.364c-1.392.627-1.392 2.644 0 3.27l8.6 3.877a2.69 2.69 0 0 0 2.212 0l8.6-3.876c1.392-.627 1.392-2.644 0-3.27l-5.275-2.379a2.25 2.25 0 0 1-2.181.385v2.879a2.25 2.25 0 0 1-4.5 0V7.37a2.25 2.25 0 0 1-2.18-.385"
      />
    </svg>
  );
};
export default LayerBringToFront;
