import React from "react";
const LayersLogo: React.FC<
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
        d="M20.75 9.75h-10a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1"
      />
      <path
        fill="currentColor"
        d="M10.75 8.5a2.25 2.25 0 0 0-2.25 2.25V18H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1.5z"
      />
      <path
        fill="currentColor"
        d="M7 4.75A2.25 2.25 0 0 0 4.75 7v7.25h-1.5a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1.5z"
      />
    </svg>
  );
};
export default LayersLogo;
