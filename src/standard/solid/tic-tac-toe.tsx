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
        d="M13 2a1 1 0 1 0-2 0v9H2a1 1 0 1 0 0 2h9v9a1 1 0 1 0 2 0v-9h9a1 1 0 1 0 0-2h-9zM5.5 17a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M2 18.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0M16.707 2.293a1 1 0 1 0-1.414 1.414L17.086 5.5l-1.793 1.793a1 1 0 0 0 1.414 1.414L18.5 6.914l1.793 1.793a1 1 0 1 0 1.414-1.414L19.914 5.5l1.793-1.793a1 1 0 0 0-1.414-1.414L18.5 4.086z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TicTacToe;
