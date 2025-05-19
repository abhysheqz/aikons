import React from "react";
const PointingLeft_07: React.FC<
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
        d="m11.276 20.03 1.809.006v-.794h-1.642q-.226-.001-.427-.074a1.3 1.3 0 0 1-.854-1.231V16.52l2.307.007v-.794h-2.14q-.226-.001-.427-.074a1.305 1.305 0 0 1-.854-1.231V13.02h2.307v-.794H2.692a1.442 1.442 0 1 1 0-2.884h12.567l-2.592-2.406a1.563 1.563 0 0 1 .131-2.338 1.61 1.61 0 0 1 1.96-.03l.016.012 7.976 4.762v10.4c0 1.661-1.322 3.008-2.952 3.008h-7.241a1.293 1.293 0 0 1-1.281-1.305z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.457 1.25 1.25 4.457l3.207 3.207L5.87 6.25l-.793-.793h3.586v-2H5.078l.793-.793z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PointingLeft_07;
