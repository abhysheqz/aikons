import React from "react";
const SquareArrowDiagonal_02: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm8 4H6.25V11h1.5V8.81l7.44 7.44H13v1.5h4.75V13h-1.5v2.19L8.81 7.75H11z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareArrowDiagonal_02;
