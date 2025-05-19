import React from "react";
const Link_06: React.FC<
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
        d="M5 9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4a1 1 0 1 1-2 0V9H7v11h6v-1a1 1 0 1 1 2 0v1a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-4a1 1 0 1 1 2 0v4h6V4h-6v1a1 1 0 1 1-2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Link_06;
