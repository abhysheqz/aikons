import React from "react";
const LeftToRightListStar_01: React.FC<
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
        d="M2 5.5a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M2 12a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M2 18.5a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M16.538 2.136a1 1 0 0 1 1.367.36l.595 1.02.595-1.02a1 1 0 1 1 1.727 1.008l-.581.996H21a1 1 0 1 1 0 2h-.759l.581.996a1 1 0 1 1-1.727 1.008l-.595-1.02-.595 1.02a1 1 0 1 1-1.727-1.008l.581-.996H16a1 1 0 1 1 0-2h.759l-.581-.996a1 1 0 0 1 .36-1.368M16.538 15.136a1 1 0 0 1 1.367.36l.595 1.02.595-1.02a1 1 0 0 1 1.727 1.008l-.581.996H21a1 1 0 1 1 0 2h-.759l.581.996a1 1 0 1 1-1.727 1.008l-.595-1.02-.595 1.02a1 1 0 1 1-1.727-1.008l.581-.996H16a1 1 0 1 1 0-2h.759l-.581-.996a1 1 0 0 1 .36-1.368"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LeftToRightListStar_01;
