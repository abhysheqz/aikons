import React from "react";
const AiSearch: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.5 17.5 22 22"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 11a9 9 0 1 0-18 0 9 9 0 0 0 18 0Z"
      />
      <path
        fill="currentColor"
        d="M15.75 8a.75.75 0 0 0-1.5 0zm-1.5 6a.75.75 0 0 0 1.5 0zM9.222 8v-.75a.75.75 0 0 0-.703.49zm.556 0 .703-.26a.75.75 0 0 0-.703-.49zm-3.481 5.74a.75.75 0 0 0 1.406.52zm5 .52a.75.75 0 0 0 1.406-.52zM14.25 8v6h1.5V8zm-5.028.75h.556v-1.5h-.556zm-1.519 5.51.89-2.4-1.407-.52-.89 2.4zm.89-2.4 1.333-3.6-1.407-.52-1.333 3.6zm.481-3.6 1.334 3.6 1.406-.52-1.333-3.6zm1.334 3.6.889 2.4 1.406-.52-.889-2.4zm-2.52.49h3.223v-1.5H7.89z"
      />
    </svg>
  );
};
export default AiSearch;
