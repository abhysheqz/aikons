import React from "react";
const Bitcoin: React.FC<
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
        d="M6 5h8.5a3.5 3.5 0 1 1 0 7M6 19h8.5a3.5 3.5 0 1 0 0-7m0 0H7.2M7 5v14M9.5 3v2m4-2v2M9.5 19v2m4-2v2"
      />
    </svg>
  );
};
export default Bitcoin;
