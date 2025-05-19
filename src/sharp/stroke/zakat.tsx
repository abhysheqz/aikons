import React from "react";
const Zakat: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 5c.987.921 3.104 3.14 3.468 5.246C19.74 11.812 18.234 13 16.551 13h-4.102c-1.683 0-3.188-1.187-2.917-2.754C9.896 8.14 12.013 5.92 13 5m3 0h-3m3 0 1.5-3h-6L13 5M4.5 14h3l2.5 1.375h1c1.5 0 2.5 1.149 2.5 2.125l-3 1-3-1m6-.5 4.21-1.404a2 2 0 0 1 2.49 1.155l.3.749-9 4.5-7-1.98"
      />
    </svg>
  );
};
export default Zakat;
