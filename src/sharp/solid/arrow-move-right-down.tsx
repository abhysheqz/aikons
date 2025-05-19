import React from "react";
const ArrowMoveRightDown: React.FC<
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
        d="m18.172 5.707-2.293-2.293L17.293 2 22 6.707l-4.707 4.707L15.879 10l2.293-2.293H7.707v10.465L10 15.879l1.414 1.414L6.707 22 2 17.293l1.414-1.414 2.293 2.293V6.707a1 1 0 0 1 1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArrowMoveRightDown;
