import React from "react";
const Note_02: React.FC<
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
        d="M17 2v4m-5-4v4M7 2v4M3.438 15H10v6.575M10 22h11V4H3v11zM13 16h3m-8-5h8"
      />
    </svg>
  );
};
export default Note_02;
