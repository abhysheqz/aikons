import React from "react";
const Calculate: React.FC<
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
        d="M2.5 1.75a.75.75 0 0 0-.75.75v19c0 .414.336.75.75.75h19a.75.75 0 0 0 .75-.75v-19a.75.75 0 0 0-.75-.75zM15.25 5.5v1.75H13.5v1.5h1.75v1.75h1.5V8.75h1.75v-1.5h-1.75V5.5zm-6.982 9.207 1.237-1.237 1.06 1.06-1.237 1.238 1.238 1.237-1.061 1.061-1.237-1.237-1.238 1.237-1.06-1.06 1.237-1.238-1.238-1.238 1.061-1.06zM18 16.75h-4v1.5h4zm-4-3h4v1.5h-4zm-4-6.5H6v1.5h4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Calculate;
