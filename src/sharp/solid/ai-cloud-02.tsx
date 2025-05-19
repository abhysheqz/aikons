import React from "react";
const AiCloud_02: React.FC<
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
        d="M18.25 19.75a1.5 1.5 0 1 1-1.45 1.111l-1.55-1.55V16h1.5v2.69l1.111 1.11q.187-.049.389-.05M8.75 16v3.31L7.2 20.863a1.5 1.5 0 0 1-1.45 1.888 1.5 1.5 0 1 1 .389-2.95l1.111-1.11V16zM12.75 19.95a1.5 1.5 0 1 1-1.5 0V16h1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.853 6.365a5.752 5.752 0 0 0-.103 11.249V14.5h12.5v3.197a5.251 5.251 0 0 0-.003-10.394 6.25 6.25 0 0 0-12.394-.938"
      />
    </svg>
  );
};
export default AiCloud_02;
