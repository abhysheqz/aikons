import React from "react";
const GoogleLens: React.FC<
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
        d="M21 14V8a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v3m10 10H6a3 3 0 0 1-3-3v-3M10 3h4l1 1.5H9z"
      />
      <circle
        cx={12}
        cy={13}
        r={3}
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
      />
      <circle
        cx={19}
        cy={19}
        r={2}
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
      />
    </svg>
  );
};
export default GoogleLens;
