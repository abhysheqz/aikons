import React from "react";
const AiDna: React.FC<
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
        d="M7.491 14.002c-4.49-2.4-4.49-3.6-4.49-4s0-1.6 4.49-4m0 8c-4.49 2.4-4.49 3.2-4.49 4m4.49-4c4.49-2.4 4.49-3.6 4.49-4s0-1.6-4.49-4m0 0c4.49-2.4 4.49-3.2 4.49-4m-4.49 4L5.308 4.746C3 3.283 3 2.642 3 2.002"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M14.412 12v1.98M10.925 15.5h2.052m5.97 0H21m-2.052 2.973H21m-10.075 0h2.052m1.435 1.546v1.979m3.025-1.98V22M17.427 12v1.979m-3.45 5.988h3.97a1 1 0 0 0 1-1V14.98a1 1 0 0 0-1-1h-3.97a1 1 0 0 0-1 1v3.988a1 1 0 0 0 1 1Z"
      />
    </svg>
  );
};
export default AiDna;
