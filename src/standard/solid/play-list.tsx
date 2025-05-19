import React from "react";
const PlayList: React.FC<
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
        d="M1.5 8h21v11.5a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3zm10.44 2.845c-1.165-.742-2.69.095-2.69 1.476v3.357c0 1.38 1.524 2.218 2.69 1.476l2.637-1.678a1.75 1.75 0 0 0 0-2.953z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.97 1.5 6.507 6H1.5V4.5a3 3 0 0 1 3-3zM19.493 1.5 16.03 6h6.47V4.5a3 3 0 0 0-3-3zM12.493 1.5 9.03 6h4.477l3.461-4.5z"
      />
    </svg>
  );
};
export default PlayList;
