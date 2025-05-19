import React from "react";
const LeftToRightListStar: React.FC<
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
        d="M11 5.5a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1M11 12a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1M11 18.5a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1M3.538 2.136a1 1 0 0 1 1.367.36l.595 1.02.595-1.02a1 1 0 0 1 1.727 1.008l-.581.996H8a1 1 0 1 1 0 2h-.759l.581.996a1 1 0 1 1-1.727 1.008L5.5 7.484l-.595 1.02a1 1 0 0 1-1.727-1.008l.581-.996H3a1 1 0 0 1 0-2h.759l-.581-.996a1 1 0 0 1 .36-1.368M3.538 15.136a1 1 0 0 1 1.367.36l.595 1.02.595-1.02a1 1 0 0 1 1.727 1.008l-.581.996H8a1 1 0 1 1 0 2h-.759l.581.996a1 1 0 0 1-1.727 1.008l-.595-1.02-.595 1.02a1 1 0 0 1-1.727-1.008l.581-.996H3a1 1 0 1 1 0-2h.759l-.581-.996a1 1 0 0 1 .36-1.368"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LeftToRightListStar;
