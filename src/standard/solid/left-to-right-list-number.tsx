import React from "react";
const LeftToRightListNumber: React.FC<
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
        d="M2 15a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4v1h2a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h2v-1H3a1 1 0 0 1-1-1M2 3a1 1 0 0 1 1-1h1.5a1 1 0 0 1 1 1v5H6a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h.5V4H3a1 1 0 0 1-1-1M10 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H11a1 1 0 0 1-1-1M10 12a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H11a1 1 0 0 1-1-1M10 18a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H11a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LeftToRightListNumber;
