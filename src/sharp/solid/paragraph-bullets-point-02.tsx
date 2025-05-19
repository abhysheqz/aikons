import React from "react";
const ParagraphBulletsPoint_02: React.FC<
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
        d="M21 5h-7V3h7zM21 16h-7v-2h7zM21 10h-7V8h7zM21 21h-7v-2h7z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10 6.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0M10 17.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"
      />
    </svg>
  );
};
export default ParagraphBulletsPoint_02;
