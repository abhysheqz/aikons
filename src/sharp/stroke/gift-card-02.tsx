import React from "react";
const GiftCard_02: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M2 4h20v16H2zM2 12h20M10 4v16M7 9l6 6m-6 0 6-6"
      />
    </svg>
  );
};
export default GiftCard_02;
