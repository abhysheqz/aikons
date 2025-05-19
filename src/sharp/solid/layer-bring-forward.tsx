import React from "react";
const LayerBringForward: React.FC<
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
        d="M16.414 7.664 15 9.078l-2-2v7.586h-2V7.078l-2 2-1.414-1.414L12 3.25z"
      />
      <path
        fill="currentColor"
        d="M9.75 10.875 1 15.251l11 5.499 11-5.5-8.75-4.375v5.04h-4.5z"
      />
    </svg>
  );
};
export default LayerBringForward;
