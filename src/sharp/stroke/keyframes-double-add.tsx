import React from "react";
const KeyframesDoubleAdd: React.FC<
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
        strokeWidth={1.5}
        d="M7.6 5.6 9 4l7 8-7 8-1.312-1.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M13.5 5.714 15 4l7 8-7 8-1.5-1.714M5.5 15.5v-7M2 12h7"
      />
    </svg>
  );
};
export default KeyframesDoubleAdd;
