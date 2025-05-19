import React from "react";
const FloppyDisk: React.FC<
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
        d="M8 22v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 7h4M3 20V4a2 2 0 0 1 2-2h9.276a2 2 0 0 1 1.28.464L20.28 6.4A2 2 0 0 1 21 7.937V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2"
      />
    </svg>
  );
};
export default FloppyDisk;
