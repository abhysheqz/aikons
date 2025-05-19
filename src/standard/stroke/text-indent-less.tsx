import React from "react";
const TextIndentLess: React.FC<
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
        d="M4 4.5h5M6 9.5h3M4 14.5h5M6 19.5h3M13 3v18M20 8.5 16.5 12l3.5 3.5"
      />
    </svg>
  );
};
export default TextIndentLess;
