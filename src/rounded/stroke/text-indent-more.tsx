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
        d="M15 4.5h5M15 9.5h3M15 14.5h5M15 19.5h3M11 3v18M4 8.5l1.542 1.242C6.847 10.794 7.5 11.32 7.5 12c0 .68-.653 1.206-1.958 2.258L4 15.5"
      />
    </svg>
  );
};
export default TextIndentMore;
