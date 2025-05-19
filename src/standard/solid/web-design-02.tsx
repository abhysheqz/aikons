import React from "react";
const WebDesign_02: React.FC<
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
        d="M10 12.25A2.75 2.75 0 0 0 7.25 15v5A2.75 2.75 0 0 0 10 22.75h10A2.75 2.75 0 0 0 22.75 20v-5A2.75 2.75 0 0 0 20 12.25zm4.03 4.28a.75.75 0 1 0-1.06-1.06l-1.5 1.5a.75.75 0 0 0 0 1.06l1.5 1.5a.75.75 0 1 0 1.06-1.06l-.97-.97zm3-1.06a.75.75 0 1 0-1.06 1.06l.97.97-.97.97a.75.75 0 1 0 1.06 1.06l1.5-1.5a.75.75 0 0 0 0-1.06z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19 7v3a1 1 0 1 0 2 0V4a3 3 0 0 0-3-3H4a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h1a1 1 0 1 0 0-2H4a1 1 0 0 1-1-1V7z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WebDesign_02;
