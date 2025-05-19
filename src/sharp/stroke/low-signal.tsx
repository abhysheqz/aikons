import React from "react";
const LowSignal: React.FC<
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
        d="M17 19V5h3v14zM10.5 19V8h3v11zM5.5 12H4v7h1.5m0-7H7v7H5.5m0-7v7"
      />
    </svg>
  );
};
export default LowSignal;
