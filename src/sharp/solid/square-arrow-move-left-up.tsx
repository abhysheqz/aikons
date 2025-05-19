import React from "react";
const SquareArrowMoveLeftUp: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm6.966 4.22 1.06 1.06-1.22 1.22h6.19a.75.75 0 0 1 .75.75V17h-1.5v-6.75h-5.44l1.22 1.22-1.06 1.06-3.03-3.03z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareArrowMoveLeftUp;
