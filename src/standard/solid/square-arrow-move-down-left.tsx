import React from "react";
const SquareArrowMoveDownLeft: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zM16 6.25a.75.75 0 0 1 .75.75v5.5A2.75 2.75 0 0 1 14 15.25H9.56l1.026 1.282a.75.75 0 0 1-1.172.936l-1.998-2.497a.75.75 0 0 1 .003-.946l1.995-2.494a.75.75 0 0 1 1.172.938L9.56 13.75H14c.69 0 1.25-.56 1.25-1.25V7a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareArrowMoveDownLeft;
