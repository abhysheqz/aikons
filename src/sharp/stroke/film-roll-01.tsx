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
        d="M5 4.5h9V22H5z"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M7.5 4.5V2h4v2.5" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 4.5h13M3 22h13M14 7.5h7V13l-3 2v3h-4"
      />
    </svg>
  );
};
export default FilmRoll_01;
