import React from "react";
const Note_04: React.FC<
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
        d="M7 2v4m5-4v4m5-4v4M20.576 15H14v6.416M21 4H3v18h11l7-7zM11 16H8m8-5H8"
      />
    </svg>
  );
};
export default Note_04;
