import React from "react";
const DirectionRight_02: React.FC<
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
        d="M10 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1m0 8a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V11a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.5 21a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1M5.25 5c0-.966.784-1.75 1.75-1.75h7.985a1.75 1.75 0 0 1 1.424.733l2.201 3.081a.75.75 0 0 1 0 .872l-2.2 3.081a1.75 1.75 0 0 1-1.425.733H7A1.75 1.75 0 0 1 5.25 10z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DirectionRight_02;
