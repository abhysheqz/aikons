import React from "react";
const FullScreen: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 8.5V5a2 2 0 0 1 2-2h3.5M21 8.5V5a2 2 0 0 0-2-2h-3.5m0 18H19a2 2 0 0 0 2-2v-3.5M8.5 21H5a2 2 0 0 1-2-2v-3.5"
      />
    </svg>
  );
};
export default FullScreen;
