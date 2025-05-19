import React from "react";
const Manager: React.FC<
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
        d="M7.346 12.25h1.167L12 21.217l3.487-8.967h1.167l4.096 1.756v8.744H3.25v-8.744z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.786 12.25h4.427l-1.441 2.883.493 3.943L12 22l-1.266-2.924.493-3.943z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.75 5.5a4.25 4.25 0 0 1 8.5 0v1a4.25 4.25 0 0 1-8.5 0z"
      />
    </svg>
  );
};
export default Manager;
