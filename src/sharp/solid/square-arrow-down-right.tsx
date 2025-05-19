import React from "react";
const SquareArrowDownRight: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zM14.25 10v3.19L9.53 8.47 8.468 9.53l4.72 4.72h-3.19v1.5h5.75V10z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareArrowDownRight;
