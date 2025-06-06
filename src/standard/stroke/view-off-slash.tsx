import React from "react";
const ViewOffSlash: React.FC<
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
        d="M19.439 15.439C21 14 22 12 22 12c-1.5-3-5.31-7-10-7-.908 0-1.77.155-2.582.418m7.582 12C15.566 18.338 13.88 19 12 19c-4.69 0-8.5-4-10-7 0 0 1.5-3 4.5-5.082"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.858 10A2.929 2.929 0 1 0 14 14.142M3 3l18 18"
      />
    </svg>
  );
};
export default ViewOffSlash;
