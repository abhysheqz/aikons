import React from "react";
const Ruku: React.FC<
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
        d="M16 3.5h2.625C19.936 3.5 21 4.507 21 5.75 21 6.992 19.936 8 18.625 8H16"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m12.591 6.5-2.07 3.883v4.515m0 0V18.5H4V9.61C4 5.682 7.217 2.5 11.185 2.5H16.5V8zM9 18.5v3m0 0H6v-3m3 3h1.5"
      />
    </svg>
  );
};
export default Ruku;
