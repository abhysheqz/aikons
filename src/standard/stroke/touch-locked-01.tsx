import React from "react";
const TouchLocked_01: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.5 17v-1.5a1.5 1.5 0 0 0-3 0V17M14 17h6v5h-6z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 22v-2.003L4.378 14.09a1.78 1.78 0 0 1-.009-2.184 1.65 1.65 0 0 1 2.414-.234L9 14V3.75a1.75 1.75 0 1 1 3.5 0V9.5c1.377-.061 3.58.28 5.5 1.5"
      />
    </svg>
  );
};
export default TouchLocked_01;
