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
        d="M3 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1M19 5c0-.552.446-1 .995-1h.01c.55 0 .995.448.995 1s-.446 1-.995 1h-.01A1 1 0 0 1 19 5M19 12c0-.552.446-1 .995-1h.01c.55 0 .995.448.995 1s-.446 1-.995 1h-.01A1 1 0 0 1 19 12M19 19c0-.552.446-1 .995-1h.01c.55 0 .995.448.995 1s-.446 1-.995 1h-.01A1 1 0 0 1 19 19M3 12a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1M3 19a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RightToLeftListBullet;
