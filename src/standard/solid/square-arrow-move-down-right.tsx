import React from "react";
const SquareArrowMoveDownRight: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zM8 6.25a.75.75 0 0 1 .75.75v5.5c0 .69.56 1.25 1.25 1.25h4.44l-1.026-1.281a.75.75 0 1 1 1.172-.937l1.996 2.495a.75.75 0 0 1 .01.933l-.006.008-2 2.5a.75.75 0 1 1-1.172-.936l1.026-1.282H10a2.75 2.75 0 0 1-2.75-2.75V7A.75.75 0 0 1 8 6.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareArrowMoveDownRight;
