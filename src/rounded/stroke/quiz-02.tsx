import React from "react";
const Quiz_02: React.FC<
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
        d="M12 2a7.5 7.5 0 0 0-4.8 13.263C8.19 16.089 9 17.21 9 18.5h6c0-1.29.81-2.411 1.8-3.238A7.5 7.5 0 0 0 12 2Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 18.5H9v2a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M10 8c0-1.013.895-2 2-2s2 .82 2 1.833c0 .365-.116.705-.317.991C13.085 9.676 12 10.488 12 11.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.992 14h.009"
      />
    </svg>
  );
};
export default Quiz_02;
