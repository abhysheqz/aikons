import React from "react";
const SearchVisual: React.FC<
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
        d="m15.5 15 2 2m-1-5.5a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0M15 21.5c1.862 0 2.794 0 3.54-.271a4.5 4.5 0 0 0 2.689-2.69c.271-.745.271-1.677.271-3.539M9 21.5c-1.862 0-2.793 0-3.54-.271a4.5 4.5 0 0 1-2.689-2.69C2.5 17.794 2.5 16.862 2.5 15M9 2.5c-1.862 0-2.793 0-3.54.271a4.5 4.5 0 0 0-2.689 2.69C2.5 6.207 2.5 7.138 2.5 9.001M15 2.5c1.862 0 2.794 0 3.54.27a4.5 4.5 0 0 1 2.689 2.69c.271.746.271 1.677.271 3.54"
      />
    </svg>
  );
};
export default SearchVisual;
