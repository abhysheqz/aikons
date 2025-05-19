import React from "react";
const GridView: React.FC<
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
        strokeWidth={1.5}
        d="M10 3H3v7h7zM21 3h-7v7h7zM10 14H3v7h7zM21 14h-7v7h7z"
      />
    </svg>
  );
};
export default GridView;
