import React from "react";
const House_02: React.FC<
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
        d="M1.25 21a.75.75 0 0 1 .75-.75h20a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.319 2.25A2.75 2.75 0 0 0 4.79 3.917l-2.285 5.33H8.13a.25.25 0 0 0 .163-.06l2.562-2.2a1.75 1.75 0 0 1 2.275-.004l2.577 2.195a.25.25 0 0 0 .161.06l5.625.009-2.284-5.33A2.75 2.75 0 0 0 16.68 2.25zm14.431 8.497-5.884-.01a1.75 1.75 0 0 1-1.132-.417l-2.577-2.195a.25.25 0 0 0-.325 0l-2.563 2.2a1.75 1.75 0 0 1-1.14.423H2.25V21c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75zM14.5 21.75a.75.75 0 0 1-.75-.75v-5a.25.25 0 0 0-.25-.25h-3a.25.25 0 0 0-.25.25v5a.75.75 0 0 1-1.5 0v-5c0-.966.784-1.75 1.75-1.75h3c.966 0 1.75.784 1.75 1.75v5a.75.75 0 0 1-.75.75M11 11.55a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default House_02;
