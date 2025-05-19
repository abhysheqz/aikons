import React from "react";
const ArrowMoveLeftDown: React.FC<
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
        d="m5.828 5.707 2.293-2.293L6.707 2 2 6.707l4.707 4.707L8.121 10 5.828 7.707h10.465v10.465L14 15.879l-1.414 1.414L17.293 22 22 17.293l-1.414-1.414-2.293 2.293V6.707a1 1 0 0 0-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArrowMoveLeftDown;
