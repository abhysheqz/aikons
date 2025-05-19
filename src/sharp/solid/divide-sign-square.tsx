import React from "react";
const DivideSignSquare: React.FC<
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
        d="M2.47 2.47A.75.75 0 0 1 3 2.25h18a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75V3a.75.75 0 0 1 .22-.53M10.25 8a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0m0 8a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0M7 13h10v-2H7z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DivideSignSquare;
