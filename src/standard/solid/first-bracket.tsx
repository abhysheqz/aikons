import React from "react";
const FirstBracket: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="M6.78 2.374a1 1 0 0 1-.154 1.406C4.476 5.506 3 8.515 3 12s1.475 6.494 3.626 8.22a1 1 0 0 1-1.252 1.56C2.703 19.636 1 16.028 1 12s1.703-7.636 4.374-9.78a1 1 0 0 1 1.406.154M17.22 2.374a1 1 0 0 1 1.406-.154C21.297 4.364 23 7.972 23 12s-1.703 7.636-4.374 9.78a1 1 0 1 1-1.252-1.56C19.524 18.494 21 15.485 21 12s-1.475-6.494-3.626-8.22a1 1 0 0 1-.154-1.406"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FirstBracket;
