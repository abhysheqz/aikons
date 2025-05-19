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
        d="M3.664 16.986 3 13h18l-.664 3.986c-.4 2.395-.599 3.592-1.438 4.303-.84.711-2.053.711-4.48.711H9.582c-2.428 0-3.642 0-4.48-.71-.84-.712-1.04-1.91-1.439-4.304"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M18.6 10a1.45 1.45 0 0 0 0-2 1.45 1.45 0 0 1 0-2m-3.2 4a1.45 1.45 0 0 0 0-2 1.45 1.45 0 0 1 0-2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 13H2m19 0h1M5 13V9.851C5 8.83 5.829 8 6.851 8c1.329 0 2.556.712 3.215 1.866L13 15M9 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      />
    </svg>
  );
};
export default HotTube;
