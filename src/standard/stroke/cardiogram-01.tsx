import React from "react";
const Cardiogram_01: React.FC<
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
        strokeWidth={2}
        d="M6.02 18.5h-.008m3.997 0h-.01"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M21.998 15.176v3.323a3 3 0 0 1-3 3.001H5.007a3 3 0 0 1-3-3.006l.006-3.318m19.986 0 .001-9.675A3 3 0 0 0 19 2.5H5.003a3 3 0 0 0-3 3.003l.009 9.673m19.986 0H2.012"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 8.5h1l2.5 2.5L13 7l2.5 3H17"
      />
    </svg>
  );
};
export default Cardiogram_01;
