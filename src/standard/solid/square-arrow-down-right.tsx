import React from "react";
const SquareArrowDownRight: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zm5.03 6.72a.75.75 0 0 0-1.06 1.06l4.72 4.72H11a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 0-1.5 0v2.19z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareArrowDownRight;
