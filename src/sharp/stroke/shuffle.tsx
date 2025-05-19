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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.558 21 21 18h-5L8 6H3M18.558 3 21 6h-5l-2 3M3 18h5l2-3"
      />
    </svg>
  );
};
export default Shuffle;
