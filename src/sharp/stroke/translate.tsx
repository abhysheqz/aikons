import React from "react";
const Translate: React.FC<
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
        d="M5 6.328h2.7m3.3 0H9.5m-1.8 0h1.8m-1.8 0V4.5m1.8 1.828c-.316 1.131-.98 2.201-1.736 3.141M5.836 11.5a19 19 0 0 0 1.928-2.03m0 0c-.385-.453-.925-1.184-1.08-1.515m1.08 1.514 1.157 1.203"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m13.5 19.5.833-2.5m4.167 2.5-.833-2.5m-3.334 0 1.167-3.5h1l1.167 3.5m-3.334 0h3.334"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 10V2H2v12h8"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 22V10h-8l-4 4v8zM20 7.5V4h-3.5M4 16.5V20h3.5"
      />
    </svg>
  );
};
export default Translate;
