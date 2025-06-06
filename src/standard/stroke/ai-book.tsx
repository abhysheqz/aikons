import React from "react";
const AiBook: React.FC<
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
        d="M19.5 18c-.598.4-1 1.145-1 2s.402 1.6 1 2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 22H6a2 2 0 0 1-2-2m0 0a2 2 0 0 1 2-2h14V2H6a2 2 0 0 0-2 2z"
      />
      <path
        fill="currentColor"
        d="M16.25 7a.75.75 0 0 0-1.5 0zm-1.5 6a.75.75 0 0 0 1.5 0zm-4.528-6v-.75a.75.75 0 0 0-.703.49zm.556 0 .703-.26a.75.75 0 0 0-.703-.49zm-3.481 5.74a.75.75 0 0 0 1.406.52zm5 .52a.75.75 0 0 0 1.406-.52zM14.75 7v6h1.5V7zm-4.528.75h.556v-1.5h-.556zm-1.519 5.51.89-2.4-1.407-.52-.89 2.4zm.89-2.4 1.332-3.6-1.406-.52-1.333 3.6zm.482-3.6 1.333 3.6 1.406-.52-1.333-3.6zm1.333 3.6.889 2.4 1.406-.52-.889-2.4zm-2.52.49h3.223v-1.5H8.89z"
      />
    </svg>
  );
};
export default AiBook;
