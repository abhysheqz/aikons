import React from "react";
const SquareArrowDataTransferVertical: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zm5.5 5a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.281.53l-2-2a.75.75 0 1 1 1.061-1.06l.72.719V7.5a.75.75 0 0 1 .75-.75m3.713.057a.75.75 0 0 1 .817.163l2 2a.75.75 0 0 1-1.06 1.06l-.72-.72v7.19a.75.75 0 0 1-1.5 0v-9a.75.75 0 0 1 .463-.693"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareArrowDataTransferVertical;
