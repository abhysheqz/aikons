import React from "react";
const QuoteDownSquare: React.FC<
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
        d="M4.75 2A2.75 2.75 0 0 0 2 4.75v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15A2.75 2.75 0 0 0 19.75 2zM10 13v.25a2.25 2.25 0 0 1-2.25 2.25.75.75 0 0 0 0 1.5 3.75 3.75 0 0 0 3.75-3.75v-4A1.75 1.75 0 0 0 9.75 7.5h-2A1.75 1.75 0 0 0 6 9.25v2c0 .966.784 1.75 1.75 1.75zm7 0v.25a2.25 2.25 0 0 1-2.25 2.25.75.75 0 0 0 0 1.5 3.75 3.75 0 0 0 3.75-3.75v-4a1.75 1.75 0 0 0-1.75-1.75h-2A1.75 1.75 0 0 0 13 9.25v2c0 .966.784 1.75 1.75 1.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default QuoteDownSquare;
