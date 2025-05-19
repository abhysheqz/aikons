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
        fill="currentColor"
        fillRule="evenodd"
        d="M2 2h7.5v2H4v5.5H2zm12.5 0H22v7.5h-2V4h-5.5zM4 14.5V20h5.5v2H2v-7.5zm18 0V22h-7.5v-2H20v-5.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FullScreen;
