import React from "react";
const Shuffle: React.FC<
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
        d="m19 20 2-2.5h-4.417a2 2 0 0 1-1.675-.907L8.592 6.907A2 2 0 0 0 6.917 6H3M19 4l2 2.5h-4.368a2 2 0 0 0-1.715.971L14 9M3 18h3.93a2 2 0 0 0 1.664-.89L10 15"
      />
    </svg>
  );
};
export default Shuffle;
