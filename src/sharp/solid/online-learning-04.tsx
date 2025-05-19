import React from "react";
const OnlineLearning_04: React.FC<
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
        d="M2.25 6.222c0-.537.432-.972.964-.972h2.893v1.944H4.18v13.612h9.642v-5.834h1.929v6.806a.97.97 0 0 1-.964.972H3.214a.97.97 0 0 1-.964-.972z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.992 18h2v2h-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.182 1.272A.75.75 0 0 0 8.25 2v9.086l6 1.5V2.539zM15.75 2.54v10.046l6-1.5V2a.75.75 0 0 0-.932-.728z"
      />
    </svg>
  );
};
export default OnlineLearning_04;
