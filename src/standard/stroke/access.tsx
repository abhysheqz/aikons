import React from "react";
const Access: React.FC<
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
        d="M7 2a5 5 0 0 0-2.5 9.331v7.34a2 2 0 0 0 .586 1.415L7 22l2.207-2.207a1 1 0 0 0 .293-.707v-.753a1 1 0 0 0-.2-.6l-.78-1.04a1 1 0 0 1 .093-1.306l.594-.594a1 1 0 0 0 .293-.707V11.33A5 5 0 0 0 7 2Z"
      />
      <path fill="#D9D9D9" d="M7 7h.009z" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 7h.009"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 14h8a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-8M15 5h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6"
      />
    </svg>
  );
};
export default Access;
