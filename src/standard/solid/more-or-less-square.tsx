import React from "react";
const MoreOrLessSquare: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zm5.207 5.957a1 1 0 1 0-1.414-1.414l-2 2A1 1 0 0 0 7 10h10a1 1 0 1 0 0-2H9.414zM7 11a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2zm0 3a1 1 0 1 0 0 2h7.586l-.293.293a1 1 0 0 0 1.414 1.414l2-2A1 1 0 0 0 17 14z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MoreOrLessSquare;
