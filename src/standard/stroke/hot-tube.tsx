import React from "react";
const HotTube: React.FC<
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
        d="M18.5 10c.667-.552.667-1.448 0-2s-.667-1.448 0-2m-3 4c.667-.552.667-1.448 0-2s-.667-1.448 0-2M5 12.995v-2.731a2 2 0 0 1 2.247-1.985l.8.1a2 2 0 0 1 1.456.937L13 15M9 4a2 2 0 1 1-4-.002A2 2 0 0 1 9 4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m3 13.01 1.652 7.424A2 2 0 0 0 6.604 22h10.792a2 2 0 0 0 1.952-1.566L21 13m-18 .01L2 13m1 .01L21 13m0 0 1 .01"
      />
    </svg>
  );
};
export default HotTube;
