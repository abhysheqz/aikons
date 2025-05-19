import React from "react";
const CursorMagicSelection_04: React.FC<
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
      viewBox="0 0 25 25"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M9 4V2M5 5 3.5 3.5M4 9H2m3 4-1.5 1.5m11-11L13 5M8 8l14 5.444-6.222 2.334L13.444 22z"
      />
    </svg>
  );
};
export default CursorMagicSelection_04;
