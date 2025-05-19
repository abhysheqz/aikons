import React from "react";
const ArrowTurnBackward: React.FC<
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
        d="M15.5 6.5H11v-2h4.5a5.5 5.5 0 0 1 0 11H8.414v4L3 14.5l5.414-5v4H15.5a3.5 3.5 0 1 0 0-7"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArrowTurnBackward;
