import React from "react";
const MoneyBag_01: React.FC<
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
        d="M20.943 16.835c-.657-3.951-4.167-8.113-5.943-9.841H9c-1.776 1.728-5.286 5.89-5.943 9.84-.488 2.94 2.222 5.168 5.251 5.168h7.384c3.029 0 5.74-2.228 5.25-5.167"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m9.02 7.046-2.012-3.52a.01.01 0 0 1 .01-.015l2.99.464 2-1.974a.01.01 0 0 1 .014 0l1.95 1.974 2.99-.464a.01.01 0 0 1 .01.015l-1.997 3.52"
      />
    </svg>
  );
};
export default MoneyBag_01;
