import React from "react";
const KeyframeAdd: React.FC<
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
        d="m16 12.67-5.27-5.998a1.965 1.965 0 0 0-2.96 0L2.5 12.67a2.02 2.02 0 0 0 0 2.66l5.27 5.998a1.965 1.965 0 0 0 2.96 0L16 15.33a2.02 2.02 0 0 0 0-2.66M19 8V2m-3 3h6"
      />
    </svg>
  );
};
export default KeyframeAdd;
