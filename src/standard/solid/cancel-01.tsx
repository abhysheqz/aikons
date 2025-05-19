import React from "react";
const Cancel_01: React.FC<
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
        fill="currentColor"
        d="M4.117 18.116a1.25 1.25 0 0 0 1.767 1.768l14-14a1.25 1.25 0 1 0-1.768-1.768z"
      />
      <path
        fill="currentColor"
        d="M5.884 4.116a1.25 1.25 0 0 0-1.767 1.768l14 14a1.25 1.25 0 0 0 1.767-1.768z"
      />
    </svg>
  );
};
export default Cancel_01;
