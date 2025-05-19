import React from "react";
const SortByUp_01: React.FC<
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
        d="M17.293 3.586 21 7.293l-1.414 1.414-1.293-1.293V14a1 1 0 0 1-.341.753l-4 3.5-1.317-1.505 3.658-3.202V7.415L15 8.707l-1.414-1.414z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M10 3H3v7h7zM10 14H3v7h7z" />
    </svg>
  );
};
export default SortByUp_01;
