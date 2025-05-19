import React from "react";
const DiscountTag_01: React.FC<
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
        d="M11 22.75a.75.75 0 0 0 .53-.22l9.22-9.275-1.137-6.869-6.868-1.192L3.47 14.47a.75.75 0 0 0 0 1.06l7 7c.14.14.331.22.53.22m1.313-11.5h-1.51v1.5h1.51zm2.492 2.5h-6.5v1.5h6.5zm-2.49 2.5h-1.51v1.5h1.51z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.604 1.412c.996-.275 2.09-.268 3.027.567 1.878 1.672 2.29 5.243-.051 7.554l-1.054-1.068c1.712-1.689 1.353-4.257.108-5.366-.42-.373-.916-.439-1.63-.242-.699.193-1.458.6-2.321 1.06l-.212.113c-.899.48-1.921 1.009-2.92 1.186-.516.09-1.056.095-1.591-.064-.541-.16-1.033-.475-1.464-.954L7.61 3.194c.264.293.524.445.777.52.258.077.554.086.902.024.727-.128 1.542-.533 2.476-1.031l.24-.129c.821-.44 1.73-.926 2.6-1.166"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DiscountTag_01;
