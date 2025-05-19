import React from "react";
const Fire_03: React.FC<
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
        d="M11.092 2.039a.75.75 0 0 0-1.028-.15c-1.838 1.313-3.53 3.164-4.767 5.194C4.064 9.107 3.25 11.367 3.25 13.5a8.75 8.75 0 1 0 17.5 0c0-3.166-1.692-7.296-4.233-9.71a.75.75 0 0 0-1.117.094l-1.41 1.879zm.008 7.01a.75.75 0 0 0-1.13-.08c-.506.506-1.178 1.204-1.723 2.037-.544.831-.997 1.85-.997 2.994 0 2.814 2.046 5.25 4.75 5.25s4.75-2.436 4.75-5.25c0-.906-.208-1.763-.577-2.512a.75.75 0 0 0-1.155-.242l-1.394 1.17z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Fire_03;
