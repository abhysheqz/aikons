import React from "react";
const MessageDelay_02: React.FC<
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
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.898 12.445h.009m-3.967 0h.01"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m17.35 6.477 1.98-1.99m2.477 1.492a3.97 3.97 0 0 1-3.962 3.98 3.97 3.97 0 0 1-3.962-3.98A3.97 3.97 0 0 1 17.845 2a3.97 3.97 0 0 1 3.962 3.98Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.873 3.01c-6.676.207-10.18 8.98-6.137 14.942l-1.828 3.837a.1.1 0 0 0 .123.137l4.339-1.493c2.312 1.388 8.598 1.555 10.87.023 2.295-1.265 4.746-3.544 4.559-8.248M9.873 3.01q.239-.014.482-.014m-.482.014 1.406-.005 1.298-.009"
      />
    </svg>
  );
};
export default MessageDelay_02;
