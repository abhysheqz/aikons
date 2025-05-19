import React from "react";
const News_01: React.FC<
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
        d="M10 8.006h9m-9 4.006h3m6 0h-3m-6 4.005h3m6 0h-3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m7.018 7.528.029 10.558a2.41 2.41 0 0 1-2.405 2.422m2.376-12.98H2.04l.029 10.57a2.41 2.41 0 0 0 2.405 2.41h.169m2.376-12.98.027-3.925a.1.1 0 0 1 .1-.1h14.79a.1.1 0 0 1 .1.101l-.027 14.052c.051 1.87-1.03 2.735-2.366 2.852h-15"
      />
    </svg>
  );
};
export default News_01;
