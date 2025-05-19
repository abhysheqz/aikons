import React from "react";
const SquareArrowRightDouble: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm3.934 6.244L10.002 12l-3.068 3.506 1.128.988L11.995 12 8.062 7.506zm5.5 0L15.502 12l-3.068 3.506 1.129.988L17.495 12l-3.933-4.494z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareArrowRightDouble;
