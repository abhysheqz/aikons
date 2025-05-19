import React from "react";
const TextIndentMore: React.FC<
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
        d="M15 4.5h5M15 9.5h3M15 14.5h5M15 19.5h3M11 3v18M4 8.5 7.5 12 4 15.5"
      />
    </svg>
  );
};
export default TextIndentMore;
