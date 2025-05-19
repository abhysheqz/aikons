import React from "react";
const ParagraphBulletsPoint_01: React.FC<
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
        d="M10 3H3v7h7zM10 14H3v7h7zM14 4h7M14 15h7M14 9h7M14 20h7"
      />
    </svg>
  );
};
export default ParagraphBulletsPoint_01;
