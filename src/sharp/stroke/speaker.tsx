import React from "react";
const Speaker: React.FC<
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
        d="M3.5 2v20h17V2z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15.5 15a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM13.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      />
    </svg>
  );
};
export default Speaker;
