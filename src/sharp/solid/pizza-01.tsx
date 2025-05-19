import React from "react";
const Pizza_01: React.FC<
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
        d="M7.822 2.78a.75.75 0 0 1 .851-.518c3.415.624 6.392 2.05 8.703 4.361 2.312 2.312 3.738 5.29 4.362 8.704a.75.75 0 0 1-.517.851l-2.222.684c-.715-2.853-1.624-5.305-3.373-7.294-1.813-2.064-4.455-3.55-8.487-4.569z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.5 10.558c1.528 1.739 2.364 3.935 3.063 6.746L13.6 18.523a3.251 3.251 0 0 0-6.215 1.912l-4.165 1.282a.75.75 0 0 1-.938-.938l1.936-6.291A3.25 3.25 0 1 0 6.12 8.309l.577-1.874c3.893.973 6.244 2.35 7.803 4.123M13.008 13a1 1 0 0 0 0-2h-.01a1 1 0 1 0 0 2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10.5 17.75c.78 0 1.44.51 1.666 1.214l-3.345 1.03A1.75 1.75 0 0 1 10.5 17.75M4.665 13.038l1.01-3.28a1.75 1.75 0 1 1-1.01 3.28"
      />
    </svg>
  );
};
export default Pizza_01;
