import React from "react";
const RightToLeftListTriangle: React.FC<
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
        d="M2 5.25a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m0 6.5a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m0 6.5a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M21.114 2.094a.75.75 0 0 1 .386.656v5a.75.75 0 0 1-1.148.636l-4-2.5a.75.75 0 0 1 0-1.272l4-2.5a.75.75 0 0 1 .762-.02M21.114 15.094a.75.75 0 0 1 .386.656v5a.75.75 0 0 1-1.148.636l-4-2.5a.75.75 0 0 1 0-1.272l4-2.5a.75.75 0 0 1 .762-.02"
      />
    </svg>
  );
};
export default RightToLeftListTriangle;
