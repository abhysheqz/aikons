import React from "react";
const AlphabetHebrew: React.FC<
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
        d="M5 3c3.5 7.714 9.917 10.286 14 18"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 15c3.759-2.25 4-6.212 4-8 0-2.667-.667-4-.667-4M5.727 21S5 19.643 5 16.93c0-1.76.246-5.585 3.962-7.906"
      />
    </svg>
  );
};
export default AlphabetHebrew;
