import React from "react";
const Train_01: React.FC<
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
        d="M20 15V6a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v9a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 12c2.413.655 5 1 7.5 1s6.068-.42 8.5-1M7 19l-2 3m12-3 2 3"
      />
      <path
        fill="currentColor"
        d="M6.5 16.25a.75.75 0 0 0 0-1.5zm11-1.5a.75.75 0 0 0 0 1.5zM4 16.25h2.5v-1.5H4zm13.5 0H20v-1.5h-2.5z"
      />
    </svg>
  );
};
export default Train_01;
