import React from "react";
const YogaMat: React.FC<
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
        d="M6 13.5a2.5 2.5 0 0 0 4.491 1.512c.48-.63.47-1.506.166-2.238A4.501 4.501 0 0 0 2 14.5 4.5 4.5 0 0 0 6.5 19H14l8-6h-4"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10.5 15 18 9.5s0-.248-.015-.534c-.026-.516-.117-1.04-.345-1.502l-.046-.09A4.55 4.55 0 0 0 13.588 5c-.933 0-1.801.279-2.523.757L4 10.75"
      />
    </svg>
  );
};
export default YogaMat;
