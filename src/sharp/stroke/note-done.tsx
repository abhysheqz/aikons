import React from "react";
const NoteDone: React.FC<
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
        d="M16 2v4m-5-4v4M6 2v4M20 13V4H2v18h9"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="m14 20 2 2 6-6" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 16h4m-4-5h8"
      />
    </svg>
  );
};
export default NoteDone;
