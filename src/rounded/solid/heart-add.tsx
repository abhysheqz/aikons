import React from "react";
const HeartAdd: React.FC<
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
        d="M16.5 19.5V17H14a1 1 0 1 1 0-2h2.5v-2.5a1 1 0 1 1 2 0V15H21a1 1 0 1 1 0 2h-2.5v2.5a1 1 0 1 1-2 0"
      />
      <path
        fill="currentColor"
        d="M17 2.75c3.348 0 5.75 2.702 5.75 5.944 0 1.732-.774 3.469-1.85 5.056h-1.15V12.5a2.25 2.25 0 0 0-2.02-2.238l-.23-.012a2.25 2.25 0 0 0-2.25 2.25v1.25H14a2.25 2.25 0 0 0 0 4.5h1.25v1.373q-.334.271-.643.512l-.569.433a3.39 3.39 0 0 1-3.844.16l-.232-.16c-1.433-1.071-3.582-2.84-5.38-4.908-1.772-2.036-3.332-4.507-3.332-6.966C1.25 5.452 3.652 2.75 7 2.75c1.592 0 3.134.513 5 2.215 1.866-1.702 3.408-2.215 5-2.215"
      />
    </svg>
  );
};
export default HeartAdd;
