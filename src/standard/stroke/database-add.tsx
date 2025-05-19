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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.012 14.985c-4.424 0-8.01-1.342-8.01-2.996"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m19.022 4.997-.02 6.004m-16-6.004V18.98c0 1.654 3.586 2.996 8.01 2.996q.252 0 .5-.006"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11.012 7.994c4.424 0 8.01-1.342 8.01-2.997s-3.586-2.996-8.01-2.996-8.01 1.342-8.01 2.996c0 1.655 3.586 2.997 8.01 2.997Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m7.008 7.993-.006 2.008M7.008 14.985 7.002 17M17.002 16.501v3m-1.5-1.5h3m2.496-.02A4.01 4.01 0 0 1 16.996 22a4.01 4.01 0 0 1-4.002-4.017 4.01 4.01 0 0 1 4.002-4.017 4.01 4.01 0 0 1 4.002 4.017"
      />
    </svg>
  );
};
export default DatabaseAdd;
