import React from "react";
const SquareArrowReload_02: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm7.086 4.718L9.06 8.25h7.44a.75.75 0 0 1 .75.75v3h-1.5V9.75H7.5a.75.75 0 0 1-.586-1.219l2-2.5zM8.25 12v2.25h8.25a.75.75 0 0 1 .586 1.218l-2 2.5-1.172-.937 1.026-1.281H7.5a.75.75 0 0 1-.75-.75v-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareArrowReload_02;
