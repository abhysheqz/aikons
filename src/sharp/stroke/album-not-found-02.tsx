import React from "react";
const AlbumNotFound_02: React.FC<
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
        d="M3 11.119a15 15 0 0 1 1.872-.117c2.652-.049 5.239.674 7.3 2.04C14.081 14.31 15.424 16.053 16 18"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 7h.009"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m2 2 20 20M3 2.989V18h15M6.145 2.989H18v11.886"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.968 6h3.054v11.847M6 18.147v2.852h15.022"
      />
    </svg>
  );
};
export default AlbumNotFound_02;
