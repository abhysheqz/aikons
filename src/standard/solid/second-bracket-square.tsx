import React from "react";
const SecondBracketSquare: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zM8 7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1a1 1 0 0 0 0-2H8V9h1a1 1 0 1 0 0-2zm7 0a1 1 0 1 0 0 2h1v6h-1a1 1 0 1 0 0 2h1a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SecondBracketSquare;
