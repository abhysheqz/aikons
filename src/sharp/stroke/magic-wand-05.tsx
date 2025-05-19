import React from "react";
const MagicWand_05: React.FC<
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
        d="M11 5.067A2.65 2.65 0 0 1 8.933 3h-.866A2.65 2.65 0 0 1 6 5.067v.866A2.65 2.65 0 0 1 8.067 8h.866A2.65 2.65 0 0 1 11 5.933z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m16.692 9.803 1.791-1.792a1.764 1.764 0 0 0-2.494-2.494l-1.792 1.791m2.495 2.495-10.68 10.68a1.764 1.764 0 0 1-2.495-2.494l10.68-10.68m2.495 2.494-2.495-2.495"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M17.974 14A3.82 3.82 0 0 1 15 16.974v.052A3.82 3.82 0 0 1 17.974 20h.052A3.82 3.82 0 0 1 21 17.026v-.052A3.82 3.82 0 0 1 18.026 14z"
      />
    </svg>
  );
};
export default MagicWand_05;
