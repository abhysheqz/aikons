import React from "react";
const AiFolder_01: React.FC<
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
        d="M18.25 19.75a1.5 1.5 0 1 1-1.45 1.111l-1.33-1.33a.75.75 0 0 1-.22-.531v-3h1.5v2.69l1.111 1.11q.187-.049.389-.05M8.75 16v3a.75.75 0 0 1-.22.53L7.2 20.861a1.5 1.5 0 0 1-1.45 1.889 1.5 1.5 0 1 1 .389-2.95l1.111-1.11V16zM12.75 19.95a1.5 1.5 0 1 1-1.5 0V16h1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2 1.25a.75.75 0 0 0-.75.75v16c0 .414.336.75.75.75h2.091c.426-.283.93-.46 1.471-.494l.188-.188V14.5h12.5v3.568l.188.188c.542.033 1.045.21 1.47.494H22a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-.75-.75h-9.625l-3-4z"
      />
    </svg>
  );
};
export default AiFolder_01;
