import React from "react";
const CheckmarkBadge_02: React.FC<
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
        d="m8.496 12.496 2.3 2 4.2-5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M4.997 5.007a.01.01 0 0 1 .01-.01H9l2.994-2.994a.01.01 0 0 1 .014 0l2.994 2.994h3.992a.01.01 0 0 1 .01.01V9l2.994 2.994a.01.01 0 0 1 0 .014l-2.994 2.994v3.992a.01.01 0 0 1-.01.01H15l-2.994 2.994a.01.01 0 0 1-.014 0l-2.991-2.991-.007-.003H5.007a.01.01 0 0 1-.01-.01V15l-2.994-2.994a.01.01 0 0 1 0-.014l2.994-2.994z"
      />
    </svg>
  );
};
export default CheckmarkBadge_02;
