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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M3 8.5V3h5.5M21 8.5V3h-5.5m0 18H21v-5.5M8.5 21H3v-5.5"
      />
    </svg>
  );
};
export default FullScreen;
