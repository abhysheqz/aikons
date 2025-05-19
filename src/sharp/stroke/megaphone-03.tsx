import React from "react";
const Megaphone_03: React.FC<
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
        d="M7 9v6M7 9H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h3l10 3 2.5 2H21V4h-1.5L17 6z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M8 15.5v2.546a1.954 1.954 0 0 0 3.58 1.084L13 17"
      />
    </svg>
  );
};
export default Megaphone_03;
