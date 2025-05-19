import React from "react";
const Cells: React.FC<
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
        fillRule="evenodd"
        d="M13.83 8.165a.75.75 0 0 1 .67-.415h5a.75.75 0 0 1 .67.415l2 4a.75.75 0 0 1 0 .67l-2 4a.75.75 0 0 1-.67.415h-5a.75.75 0 0 1-.67-.415l-2-4a.75.75 0 0 1 0-.67zM3.83 2.165a.75.75 0 0 1 .67-.415h5a.75.75 0 0 1 .67.415l2 4a.75.75 0 0 1 0 .67l-2 4a.75.75 0 0 1-.67.415h-5a.75.75 0 0 1-.67-.415l-2-4a.75.75 0 0 1 0-.67zM3.83 13.165a.75.75 0 0 1 .67-.415h5a.75.75 0 0 1 .67.415l2 4a.75.75 0 0 1 0 .67l-2 4a.75.75 0 0 1-.67.415h-5a.75.75 0 0 1-.67-.415l-2-4a.75.75 0 0 1 0-.67z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Cells;
