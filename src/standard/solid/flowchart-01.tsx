import React from "react";
const Flowchart_01: React.FC<
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
        d="M8.999 1a2 2 0 0 0-2 2H6a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h2.585l2.414 2.414V17h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2h1a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3h-2.586L13 8.586V7h2a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm2 6h-2a2 2 0 0 1-2-2H6a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2.585l2.414-2.414zm2 10h2a2 2 0 0 1 2 2h1a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2.586L13 15.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Flowchart_01;
