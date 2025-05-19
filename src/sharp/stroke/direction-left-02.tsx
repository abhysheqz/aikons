import React from "react";
const DirectionLeft_02: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.998 12v9M13.998 3v2M17.999 21H9.996"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m9.022 4.992 8.967-.01a.01.01 0 0 1 .01.01v6.998a.01.01 0 0 1-.01.01l-8.954.01-3.031-3.524z"
      />
    </svg>
  );
};
export default DirectionLeft_02;
