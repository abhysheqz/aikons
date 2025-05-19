import React from "react";
const LayerSendBackward: React.FC<
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
        d="M16.414 16.336 15 14.922l-2 2V9.336h-2v7.586l-2-2-1.414 1.414L12 20.75z"
      />
      <path
        fill="currentColor"
        d="M9.75 13.125 1 8.749 12 3.25l11 5.5-8.75 4.375v-5.04h-4.5z"
      />
    </svg>
  );
};
export default LayerSendBackward;
