import React from "react";
const Software: React.FC<
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
        d="M10 10a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM21 15H3v7h18zM10 18h4"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.245 15a8 8 0 1 0-12.49 0M17.5 4.5l-2 2"
      />
    </svg>
  );
};
export default Software;
