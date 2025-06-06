import React from "react";
const TicTacToe: React.FC<
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
        d="M11 22V2h2v20z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 11h20v2H2zM5.5 17a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M2 18.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0M18.5 4.086l1.793-1.793 1.414 1.414L19.914 5.5l1.793 1.793-1.414 1.414L18.5 6.914l-1.793 1.793-1.414-1.414L17.086 5.5l-1.793-1.793 1.414-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TicTacToe;
