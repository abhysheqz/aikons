import React from "react";
const Bank: React.FC<
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
        d="M11.996 7.014h.01"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 10.009v8.495m4-8.495v8.495M16 10.009v8.495m4-8.495v8.495M22 18.504H2v3.498h20z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m2.006 7.013 9.978-5.012a.01.01 0 0 1 .01 0l10 5.012a.01.01 0 0 1 .006.009v2.987H2V7.022a.01.01 0 0 1 .006-.009Z"
      />
    </svg>
  );
};
export default Bank;
