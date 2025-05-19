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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m7 5.548.77-.876a1.965 1.965 0 0 1 2.96 0L16 10.67a2.02 2.02 0 0 1 0 2.66l-5.27 5.998a1.965 1.965 0 0 1-2.96 0L7 18.452"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 4.149a1.965 1.965 0 0 1 2.23.523l5.27 5.998a2.02 2.02 0 0 1 0 2.66l-5.27 5.998a1.965 1.965 0 0 1-2.23.524M5.5 15.5v-7M2 12h7"
      />
    </svg>
  );
};
export default KeyframesDoubleAdd;
