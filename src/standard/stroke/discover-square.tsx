import React from "react";
const DiscoverSquare: React.FC<
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
        d="M21.5 4.5a2 2 0 0 0-2-2h-15a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m9.178 10.455-1.547 4.65a1 1 0 0 0 1.265 1.264l4.66-1.553a2 2 0 0 0 1.266-1.266l1.548-4.653a1 1 0 0 0-1.266-1.264l-4.662 1.556a2 2 0 0 0-1.264 1.266Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.999 12h-.007"
      />
    </svg>
  );
};
export default DiscoverSquare;
