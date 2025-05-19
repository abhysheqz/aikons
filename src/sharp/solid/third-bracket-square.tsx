import React from "react";
const ThirdBracketSquare: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zM8 7a1 1 0 0 0-1 1v2.197l-.832 1.248a1 1 0 0 0 0 1.11L7 13.803V16a1 1 0 0 0 1 1h2v-2H9v-1.803L8.202 12 9 10.803V9h1V7zm6 2h1v1.803L15.798 12 15 13.197V15h-1v2h2a1 1 0 0 0 1-1v-2.197l.832-1.248a1 1 0 0 0 0-1.11L17 10.197V8a1 1 0 0 0-1-1h-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ThirdBracketSquare;
