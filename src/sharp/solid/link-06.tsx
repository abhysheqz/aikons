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
        d="M5 8a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v5.5h-2V9H7v11h6v-1.5h2V21a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9 3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-5.5h2V15h6V4h-6v1.5H9z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Link_06;
