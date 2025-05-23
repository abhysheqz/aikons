import React from "react";
const AiFolder_02: React.FC<
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
        d="M10.5 14.5H10a1 1 0 0 0-1 1v.5m1.5-1.5V13m0 1.5h3m0-1.5v1.5m0 0h.5a1 1 0 0 1 1 1v.5m-1.5 4.5h.5a1 1 0 0 0 1-1V19m-1.5 1.5V22m0-1.5h-3m0 0H10a1 1 0 0 1-1-1V19m1.5 1.5V22M9 19H7.5M9 19v-3m0 0H7.5m7.5 0h1.5M15 16v3m0 0h1.5M11 5.5 9.576 3.008A2 2 0 0 0 7.839 2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h.5m3-12.5H20a2 2 0 0 1 2 2V16a2 2 0 0 1-2 2h-.5"
      />
    </svg>
  );
};
export default AiFolder_02;
