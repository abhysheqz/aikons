import React from "react";
const FirstBracket: React.FC<
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
        d="M6 3c-2.411 1.935-4 5.243-4 9s1.589 7.065 4 9M18 3c2.411 1.935 4 5.243 4 9s-1.589 7.065-4 9"
      />
    </svg>
  );
};
export default FirstBracket;
