import React from "react";
const Table_03: React.FC<
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
        d="M22 4H2M5 12h14M5 15h14M3 4v1.361c0 .42.098.835.286 1.21l.82 1.64a8.47 8.47 0 0 1 0 7.578l-.82 1.64c-.188.375-.286.79-.286 1.21V20M21 4v1.361c0 .42-.098.835-.286 1.21l-.82 1.64a8.47 8.47 0 0 0 0 7.578l.82 1.64c.188.375.286.79.286 1.21V20M14 7l-.224.447c-.134.27-.201.404-.322.478-.121.075-.271.075-.572.075h-1.764c-.3 0-.451 0-.572-.075-.12-.074-.188-.209-.322-.478L10 7"
      />
    </svg>
  );
};
export default Table_03;
