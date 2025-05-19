import React from "react";
const DirectionLeft_01: React.FC<
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
        d="M15.002 21V3M11.004 21h7.994"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M8.013 5h6.967a.01.01 0 0 1 .01.01v6.998a.01.01 0 0 1-.01.01H8.026l-3.03-3.524z"
      />
    </svg>
  );
};
export default DirectionLeft_01;
