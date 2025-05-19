import React from "react";
const TextIndent_01: React.FC<
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
        d="M10.502 5a1 1 0 0 1 1-1h10a1 1 0 0 1 0 2h-10a1 1 0 0 1-1-1m0 5a1 1 0 0 1 1-1h7a1 1 0 0 1 0 2h-7a1 1 0 0 1-1-1m0 5a1 1 0 0 1 1-1h10a1 1 0 0 1 0 2h-10a1 1 0 0 1-1-1m0 5a1 1 0 0 1 1-1h7a1 1 0 0 1 0 2h-7a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4.27 6.424a.75.75 0 0 1 .96 0l3 2.5a.75.75 0 0 1-.48 1.326h-6a.75.75 0 0 1-.48-1.326zM1.047 14.245a.75.75 0 0 1 .705-.495h6a.75.75 0 0 1 .48 1.326l-3 2.5a.75.75 0 0 1-.96 0l-3-2.5a.75.75 0 0 1-.225-.831"
      />
    </svg>
  );
};
export default TextIndent_01;
