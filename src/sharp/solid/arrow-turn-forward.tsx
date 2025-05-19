import React from "react";
const ArrowTurnForward: React.FC<
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
        d="M8.5 6.5H13v-2H8.5a5.5 5.5 0 0 0 0 11h7.086v4l5.414-5-5.414-5v4H8.5a3.5 3.5 0 0 1 0-7"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArrowTurnForward;
