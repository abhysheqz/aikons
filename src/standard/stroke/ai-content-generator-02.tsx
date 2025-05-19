import React from "react";
const AiContentGenerator_02: React.FC<
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
        d="M11 20H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17.407 14.404a.638.638 0 0 1 1.186 0l.037.093a5.1 5.1 0 0 0 2.873 2.873l.093.037a.638.638 0 0 1 0 1.186l-.093.037a5.1 5.1 0 0 0-2.873 2.873l-.037.093a.638.638 0 0 1-1.186 0l-.037-.093a5.1 5.1 0 0 0-2.873-2.873l-.093-.037a.638.638 0 0 1 0-1.186l.093-.037a5.1 5.1 0 0 0 2.873-2.873z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 7H8a1 1 0 0 0-1 1v0m4-1h3a1 1 0 0 1 1 1v0m-4-1v8m0 0h-1m1 0h1"
      />
    </svg>
  );
};
export default AiContentGenerator_02;
