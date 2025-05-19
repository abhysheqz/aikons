import React from "react";
const AiFolder_02: React.FC<
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
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M15 14H9v6h6z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.5 20v2m3-2v2m-3-10v2m3-2v2M9 15.5H7m2 3H7m10-3h-2m2 3h-2"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M7 6h14.9a.1.1 0 0 1 .1.1v11.8a.1.1 0 0 1-.1.1H19M5 18H2.1a.1.1 0 0 1-.1-.1V2.1a.1.1 0 0 1 .1-.1h6.886l3.052 3.972"
      />
    </svg>
  );
};
export default AiFolder_02;
