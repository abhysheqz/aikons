import React from "react";
const SquareArrowExpand_01: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm14.75 4h-4.749v1.5h2.188l-2.718 2.719 1.06 1.06 2.719-2.718v2.188h1.5zm-7.281 6.22L7.75 15.19V13h-1.5v4.749h4.749v-1.5H8.81l2.718-2.719z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareArrowExpand_01;
