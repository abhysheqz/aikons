import React from "react";
const DatabaseAdd: React.FC<
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
        d="M11.012 14.985c-4.424 0-8.01-1.341-8.01-2.996"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.022 4.997v6.492M3.002 4.997V18.98c0 1.655 3.586 2.996 8.01 2.996q.252 0 .5-.006"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11.012 7.994c4.424 0 8.01-1.342 8.01-2.997s-3.586-2.996-8.01-2.996-8.01 1.342-8.01 2.996c0 1.655 3.586 2.997 8.01 2.997Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.008 7.993v2.497M7.008 14.985v2.497"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17.014 15.991v3.978m-1.984-1.972h4.003m1.965-.015a4.01 4.01 0 0 1-4.002 4.017 4.01 4.01 0 0 1-4.002-4.017 4.01 4.01 0 0 1 4.002-4.017 4.01 4.01 0 0 1 4.002 4.017Z"
      />
    </svg>
  );
};
export default DatabaseAdd;
