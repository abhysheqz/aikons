import React from "react";
const FlashOff: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 13H4.5l4-4.5m5.5 2.485V2l-3.886 4.5M14 11h5.5L17.5 13.5m-7.5-.485V22l5.5-6.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m2 2 20 20"
      />
    </svg>
  );
};
export default FlashOff;
