import React from "react";
const TextStrikethrough: React.FC<
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
        d="M4 12h16"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M17.5 7.667C17.5 5.089 15.038 3 12 3S6.5 5.09 6.5 7.667c0 .486.053.93.167 1.333M6 16.333C6 18.911 8.686 21 12 21s6-1.333 6-4.667c0-2.393-1.03-3.755-3.092-4.333"
      />
    </svg>
  );
};
export default TextStrikethrough;
