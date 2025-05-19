import React from "react";
const WebflowRectangle: React.FC<
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
        d="M2.5 12c0-4.478 0-6.717 1.391-8.109 1.391-1.39 3.63-1.39 8.109-1.39 4.478 0 6.718 0 8.109 1.39 1.391 1.392 1.391 3.63 1.391 8.11 0 4.478 0 6.717-1.391 8.108S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m7.5 9 1 7c2-1.2 3.5-5.166 4-7l1.5 7c2-1.6 3.167-5.333 3.5-7"
      />
    </svg>
  );
};
export default WebflowRectangle;
