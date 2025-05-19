import React from "react";
const QuoteUpSquare: React.FC<
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
        d="M4.75 2A2.75 2.75 0 0 0 2 4.75v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15A2.75 2.75 0 0 0 19.75 2zm2.75 9.25A2.25 2.25 0 0 1 9.75 9a.75.75 0 0 0 0-1.5A3.75 3.75 0 0 0 6 11.25v4c0 .966.784 1.75 1.75 1.75h2a1.75 1.75 0 0 0 1.75-1.75v-2a1.75 1.75 0 0 0-1.75-1.75H7.5zm7 0A2.25 2.25 0 0 1 16.75 9a.75.75 0 0 0 0-1.5A3.75 3.75 0 0 0 13 11.25v4c0 .966.784 1.75 1.75 1.75h2a1.75 1.75 0 0 0 1.75-1.75v-2a1.75 1.75 0 0 0-1.75-1.75H14.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default QuoteUpSquare;
