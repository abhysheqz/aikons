import React from "react";
const JoinRound: React.FC<
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
        d="M21 13a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-9C6.477 22 2 17.523 2 12V3a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v8a2 2 0 0 0 2 2z"
      />
    </svg>
  );
};
export default JoinRound;
