import React from "react";
const FilmRoll_01: React.FC<
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
        d="M4.5 4.5h9V22h-9zM7 4.5V3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 4.5h12M3 22h12"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.5 7.5H20a1 1 0 0 1 1 1v3.965a1 1 0 0 1-.445.832L18 15v2A1 1 0 0 1 17 18h-3.5"
      />
    </svg>
  );
};
export default FilmRoll_01;
