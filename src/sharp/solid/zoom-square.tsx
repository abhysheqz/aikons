import React from "react";
const ZoomSquare: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zM6.5 9v4a2 2 0 0 0 2 2H14v-4a2 2 0 0 0-2-2zm11 .5L15 11v2l2.5 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ZoomSquare;
