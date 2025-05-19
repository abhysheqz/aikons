import React from "react";
const SquareArrowReload_01: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm14.086 6.281-2-2.5-1.172.938L14.94 8.25H7.5a.75.75 0 0 0-.75.75v3h1.5V9.75h8.25a.75.75 0 0 0 .586-1.219M17.251 15v-3h-1.5v2.25H7.5a.75.75 0 0 0-.586 1.219l2 2.5 1.172-.937L9.06 15.75h7.44a.75.75 0 0 0 .75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareArrowReload_01;
