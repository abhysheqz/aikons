import React from "react";
const LetterSpacing: React.FC<
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
        d="M2 22V2M22 22V2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="bevel"
        strokeWidth={1.5}
        d="m15.04 13.01-3.066-7.475-3.02 7.475m6.086 0 1.946 4.972M15.04 13.01H8.953m-1.965 4.972 1.965-4.972"
      />
    </svg>
  );
};
export default LetterSpacing;
