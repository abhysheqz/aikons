import React from "react";
const RightToLeftListBullet: React.FC<
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
        d="M3 5a1 1 0 0 1 1-1h11.994a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1M3 12a1 1 0 0 1 1-1h11.994a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1M3 19a1 1 0 0 1 1-1h11.994a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1M18.992 5a1 1 0 0 1 1-1H20a1 1 0 0 1 0 2h-.01a1 1 0 0 1-.999-1M18.992 12a1 1 0 0 1 1-1H20a1 1 0 0 1 0 2h-.01a1 1 0 0 1-.999-1M18.992 19a1 1 0 0 1 1-1H20a1 1 0 0 1 0 2h-.01a1 1 0 0 1-.999-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RightToLeftListBullet;
