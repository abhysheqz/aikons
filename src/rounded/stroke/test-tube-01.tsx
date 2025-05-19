import React from "react";
const TestTube_01: React.FC<
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
        strokeWidth={1.5}
        d="M14.54 2v2.486c0 1.748 0 2.622.215 3.461.213.84.633 1.61 1.472 3.15l1.136 2.088c2.138 3.926 3.207 5.89 2.33 7.345l-.014.022C18.79 22 16.526 22 12 22s-6.79 0-7.68-1.448l-.013-.022c-.877-1.455.192-3.419 2.33-7.345l1.136-2.088c.84-1.54 1.258-2.31 1.472-3.15s.214-1.713.214-3.46V2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 16.002 9.009 16M15 18.002l.009-.002"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 2h8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M7.5 11.556c1-1.153 2.6-.322 4.5.762 2.5 1.426 4 .332 4.5-.703"
      />
    </svg>
  );
};
export default TestTube_01;
