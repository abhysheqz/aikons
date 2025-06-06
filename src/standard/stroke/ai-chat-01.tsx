import React from "react";
const AiChat_01: React.FC<
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
        d="M15 9.5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1zM10.5 14.5V16m3-1.5V16m-3-9v1.5m3-1.5v1.5M9 10H7.5M9 13H7.5m9-3H15m1.5 3H15"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 2.5h-4c-4.418 0-8 3.78-8 8.444V12c0 2.415.96 4.46 2.5 6 0 .77-.2 2.656-1 3.5 2.5 0 4-1.5 4-1.5a7.7 7.7 0 0 0 2.5.444h4c4.418 0 8-3.78 8-8.444v-1.056C22 6.281 18.418 2.5 14 2.5"
      />
    </svg>
  );
};
export default AiChat_01;
