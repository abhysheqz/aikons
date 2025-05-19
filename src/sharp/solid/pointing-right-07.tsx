import React from "react";
const PointingRight_07: React.FC<
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
        d="m12.724 20.03-1.809.006v-.794h1.642q.226-.001.427-.074c.498-.18.854-.664.854-1.231V16.52l-2.307.007v-.794h2.14q.226-.002.427-.074c.498-.18.854-.664.854-1.231V13.02h-2.307v-.794h8.663a1.442 1.442 0 1 0 0-2.884H8.741l2.592-2.406a1.563 1.563 0 0 0-.132-2.338 1.61 1.61 0 0 0-1.96-.03l-.016.012L1.25 9.342v10.4c0 1.661 1.322 3.008 2.952 3.008h7.24c.708 0 1.282-.584 1.282-1.305z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m19.543 1.25 3.207 3.207-3.207 3.207-1.414-1.414.793-.793h-3.586v-2h3.586l-.793-.793z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PointingRight_07;
