import React from "react";
const Slide: React.FC<
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
        d="M2 19 6 5h.5L15 19h7M7 19l2.5-8.5M4.5 11.5H9M3.5 15.5h4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="m11.5 5 9 14H22M8 7h4"
      />
    </svg>
  );
};
export default Slide;
