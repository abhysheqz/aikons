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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.25 21.25 16 19v-3m2.25 4.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM5.75 21.25 8 19v-3m-2.25 4.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 21.25V16m0 4.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M7 6h14.9a.1.1 0 0 1 .1.1v11.8a.1.1 0 0 1-.1.1H19M5 18H2.1a.1.1 0 0 1-.1-.1V2.1a.1.1 0 0 1 .1-.1h6.886l3.052 3.972"
      />
    </svg>
  );
};
export default AiFolder_01;
