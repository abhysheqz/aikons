import React from "react";
const CursorProgress_02: React.FC<
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
        d="M18.072 12.679 19 13.5l-6.23.898 2.618 6.48L12.61 22l-2.618-6.48L5 19.5 6 2l2.063 1.825"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14.5 2s-1 .818-1 2.455c0 1.636 2 2.454 2 4.09 0 1.637-1 2.455-1 2.455m0-9A4.5 4.5 0 0 0 10 6.5M14.5 2A4.5 4.5 0 0 1 19 6.5M14.5 11A4.5 4.5 0 0 0 19 6.5M14.5 11A4.5 4.5 0 0 1 10 6.5m9 0s-.818-1-2.454-1-2.455 2-4.091 2S10 6.5 10 6.5"
      />
    </svg>
  );
};
export default CursorProgress_02;
