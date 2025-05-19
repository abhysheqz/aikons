import React from "react";
const Loading_01: React.FC<
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
        d="M19.75 1.25H4.25V5a7.75 7.75 0 0 0 4.42 7 7.75 7.75 0 0 0-4.42 7v3.75h4V19a3.75 3.75 0 1 1 7.5 0v3.75h4V19a7.75 7.75 0 0 0-4.42-7 7.75 7.75 0 0 0 4.42-7z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.5 2a1 1 0 0 1 1-1h17a1 1 0 1 1 0 2h-17a1 1 0 0 1-1-1M2.5 22a1 1 0 0 1 1-1h17a1 1 0 1 1 0 2h-17a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Loading_01;
