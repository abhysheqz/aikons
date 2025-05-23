import React from "react";
const KeyframeBottom: React.FC<
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
        d="M3 21h9m0 0h9m-9 0v-3.5M11.204 3.36a1.062 1.062 0 0 1 1.592 0l3.924 4.402a1.113 1.113 0 0 1 0 1.476l-3.924 4.403a1.062 1.062 0 0 1-1.592 0L7.28 9.238a1.113 1.113 0 0 1 0-1.476z"
      />
    </svg>
  );
};
export default KeyframeBottom;
