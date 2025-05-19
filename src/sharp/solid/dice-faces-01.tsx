import React from "react";
const DiceFaces_01: React.FC<
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
        d="M21.75 2.25H2.25v19.5h19.5zM13.5 13.51V10.5h-3v3.01z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DiceFaces_01;
