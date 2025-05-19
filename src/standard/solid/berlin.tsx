import React from "react";
const Berlin: React.FC<
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
        fill="currentColor"
        d="M15 4v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 10v11M4 10v11m16-11v11m-4-11v11m-4-11v11M3 21h18"
      />
      <path
        fill="currentColor"
        d="M16.3 6V4q-.002-.396-.125-.75H21a.75.75 0 0 1 0 1.5h-.25v1.5H21a.75.75 0 0 1 0 1.5h-5.507c.494-.422.807-1.05.807-1.75M8.507 7.75H3a.75.75 0 0 1 0-1.5h.25v-1.5H3a.75.75 0 0 1 0-1.5h4.825A2.3 2.3 0 0 0 7.7 4v2c0 .7.313 1.328.807 1.75"
      />
    </svg>
  );
};
export default Berlin;
