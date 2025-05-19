import React from "react";
const TextSquare: React.FC<
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
        d="M4.75 2A2.75 2.75 0 0 0 2 4.75v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15A2.75 2.75 0 0 0 19.75 2zM9 8.25A.25.25 0 0 1 9.25 8h2.25v8.5h-.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5H13V8h2.25a.25.25 0 0 1 .25.25v.5a.75.75 0 0 0 1.5 0v-.5a1.75 1.75 0 0 0-1.75-1.75h-6A1.75 1.75 0 0 0 7.5 8.25v.5a.75.75 0 0 0 1.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TextSquare;
