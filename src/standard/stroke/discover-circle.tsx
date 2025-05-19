import React from "react";
const DiscoverCircle: React.FC<
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
        strokeWidth={1.5}
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.999 12h-.007"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m9.178 10.455-1.547 4.65a1 1 0 0 0 1.265 1.264l4.66-1.553a2 2 0 0 0 1.266-1.266l1.548-4.653a1 1 0 0 0-1.266-1.264l-4.662 1.556a2 2 0 0 0-1.264 1.266Z"
      />
    </svg>
  );
};
export default DiscoverCircle;
