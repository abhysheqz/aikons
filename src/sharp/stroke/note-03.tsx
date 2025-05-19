import React from "react";
const Note_03: React.FC<
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
        d="M17 2v4m-5-4v4M7 2v4M21 4H3v18h18zM13 17h4.5M13 11h4.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6.5 10.5 8 12l3-3M6.5 16.5 8 18l3-3"
      />
    </svg>
  );
};
export default Note_03;
