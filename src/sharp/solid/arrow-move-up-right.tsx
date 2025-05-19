import React from "react";
const ArrowMoveUpRight: React.FC<
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
        d="m16.172 6.707-2.293-2.293L15.293 3 20 7.707l-4.707 4.707L13.879 11l2.292-2.293H6V21H4V7.707a1 1 0 0 1 1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArrowMoveUpRight;
