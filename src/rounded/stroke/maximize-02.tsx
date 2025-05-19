import React from "react";
const Maximize_02: React.FC<
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
        d="m7.863 12.661 2.135 1.832 2.666-10.228a1.72 1.72 0 0 1 3.339.83l-1.202 5.1 1.688.27c1.93.29 2.895.435 3.574.842 1.123.673 1.936 1.684 1.936 3.16 0 1.027-.254 1.716-.871 3.569-.392 1.175-.587 1.763-.907 2.228a4 4 0 0 1-2.193 1.582c-.542.156-1.16.156-2.399.156h-1.05c-1.645 0-2.468 0-3.2-.302a4 4 0 0 1-.386-.184c-.696-.378-1.215-1.017-2.253-2.296l-3.36-4.138a1.74 1.74 0 0 1-.008-2.186 1.74 1.74 0 0 1 2.49-.235M9.871 4.616s.245-2.22 0-2.462m0 0c-.319-.314-2.539-.05-2.539-.05m2.539.05-2.97 2.942m-4.79 2.25s-.246 2.22 0 2.463m0 0c.318.314 2.538.05 2.538.05m-2.539-.05 2.97-2.942"
      />
    </svg>
  );
};
export default Maximize_02;
