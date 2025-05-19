import React from "react";
const FirstBracketSquare: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zm5.08 7.064a1 1 0 0 0-1.16-1.628C6.946 8.236 6 10.012 6 12s.947 3.764 2.42 4.814a1 1 0 0 0 1.16-1.628C8.643 14.516 8 13.35 8 12s.642-2.517 1.58-3.186m6-1.628a1 1 0 1 0-1.16 1.628C15.357 9.484 16 10.649 16 12s-.642 2.517-1.58 3.186a1 1 0 0 0 1.16 1.628C17.054 15.764 18 13.988 18 12s-.947-3.764-2.42-4.814"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FirstBracketSquare;
