import React from "react";
const Book_02: React.FC<
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
        d="M2.75 5A3.75 3.75 0 0 1 6.5 1.25h14.75l-.003 15.875h-1.736v3.75h1.736v1.875H6.69c-2.178 0-3.944-1.68-3.944-3.75zm14.789 12.125H6.691c-1.089 0-1.971.839-1.972 1.874V19c0 1.035.883 1.875 1.972 1.875h10.848zM8 6.25h8v1.5H8zm4 4H8v1.5h4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Book_02;
