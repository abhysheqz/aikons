import React from "react";
const KeyframeLeft: React.FC<
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
        d="M3 21v-9m0 0V3m0 9h3.5M20.64 12.796a1.062 1.062 0 0 0 0-1.592L16.239 7.28a1.113 1.113 0 0 0-1.476 0l-4.403 3.924a1.062 1.062 0 0 0 0 1.592l4.403 3.924a1.114 1.114 0 0 0 1.476 0z"
      />
    </svg>
  );
};
export default KeyframeLeft;
