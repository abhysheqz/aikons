import React from "react";
const AnchorPoint: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 14a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1l2 .002a1 1 0 0 1 1 1V13a1 1 0 0 1-1 1zM18 6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1l2 .002a1 1 0 0 1 1 1V5a1 1 0 0 1-1 1zM4 22a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1l2 .002a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1zM22 12a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M5 12a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M5 12h5M14 12h5M12 10c0-2 .833-6 5-6M12 14c0 2-.833 6-5 6"
      />
    </svg>
  );
};
export default AnchorPoint;
