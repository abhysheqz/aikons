import React from "react";
const DirectionLeft_02: React.FC<
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
        d="M13 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1m0 8a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V11a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.5 21a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1M7.59 3.983a1.75 1.75 0 0 1 1.425-.733H17c.966 0 1.75.784 1.75 1.75v5A1.75 1.75 0 0 1 17 11.75H9.015a1.75 1.75 0 0 1-1.424-.733L5.39 7.936a.75.75 0 0 1 0-.872z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DirectionLeft_02;
