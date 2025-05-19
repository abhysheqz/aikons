import React from "react";
const LeftToRightListBullet: React.FC<
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
        d="M7 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1M3 5a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1M3 12a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1M3 19a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1M7 12a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1M7 19a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LeftToRightListBullet;
