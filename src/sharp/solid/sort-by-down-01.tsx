import React from "react";
const SortByDown_01: React.FC<
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
        d="M17.293 19.253 21 15.546l-1.414-1.414-1.293 1.292V8.84a1 1 0 0 0-.341-.753l-4-3.5-1.317 1.505 3.658 3.201v6.132L15 14.132l-1.414 1.414z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M10 3H3v7h7zM10 14H3v7h7z" />
    </svg>
  );
};
export default SortByDown_01;
