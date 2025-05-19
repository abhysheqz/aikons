import React from "react";
const Note_05: React.FC<
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
        d="M8 14h4m-4-4h8M17 2v4m-5-4v4M7 2v4M21 4H3v18h18zM3 18h18"
      />
    </svg>
  );
};
export default Note_05;
