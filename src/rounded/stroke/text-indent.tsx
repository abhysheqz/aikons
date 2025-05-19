import React from "react";
const TextIndent: React.FC<
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
        d="M11 3h10M11 9h10M3 15h18M3 21h18M3 3l1.542 1.242C5.847 5.294 6.5 5.82 6.5 6.5c0 .68-.653 1.206-1.958 2.258L3 10"
      />
    </svg>
  );
};
export default TextIndent;
