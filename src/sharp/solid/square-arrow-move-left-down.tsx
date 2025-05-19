import React from "react";
const SquareArrowMoveLeftDown: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm5.96 4.22 1.062 1.06-1.218 1.22h5.688a.75.75 0 0 1 .75.75l.003 5.69 1.22-1.22 1.06 1.06-3.03 3.03-3.03-3.03 1.06-1.06 1.22 1.22-.002-4.94H8.804l1.218 1.22-1.061 1.06L5.936 9.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareArrowMoveLeftDown;
