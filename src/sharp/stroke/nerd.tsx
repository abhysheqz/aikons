import React from "react";
const Nerd: React.FC<
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
      <circle
        cx={12}
        cy={12}
        r={10}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 15a5 5 0 0 0 4 2 5 5 0 0 0 4-2M10 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0 0c.56-.56 1.164-1 2-1s1.44.44 2 1m7-1h-3.268M6.268 8H3m11 1a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"
      />
    </svg>
  );
};
export default Nerd;
