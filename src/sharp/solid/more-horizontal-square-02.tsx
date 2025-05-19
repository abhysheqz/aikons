import React from "react";
const MoreHorizontalSquare_02: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18a.75.75 0 0 0 .75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm5.257 8.5H5.75v2.5h2.507zm2.486 0h2.506v2.5h-2.506zm5 0h2.507v2.5h-2.507z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MoreHorizontalSquare_02;
