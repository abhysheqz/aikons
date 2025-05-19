import React from "react";
const ThreeDView: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m17 9-5-2.5L7 9m10 0-5 2.5M17 9v6l-5 2.5m0-6L7 9m5 2.5v6M7 9v6l5 2.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.5 2.5h-4a2 2 0 0 0-2 2v4m13-6h4a2 2 0 0 1 2 2v4m-6 13h4a2 2 0 0 0 2-2v-4m-13 6h-4a2 2 0 0 1-2-2v-4"
      />
    </svg>
  );
};
export default ThreeDView;
