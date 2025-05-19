import React from "react";
const Wrench_02: React.FC<
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
        d="M9.853 1.785a.3.3 0 0 1 .506.218v4.246c0 1.121 1.057 1.575 1.64 1.575.584 0 1.64-.464 1.64-1.575V2.003a.3.3 0 0 1 .506-.218L17.762 5.2a3.25 3.25 0 0 1 0 4.597l-3.464 3.464a3.25 3.25 0 0 1-4.596 0L6.237 9.798a3.25 3.25 0 0 1 0-4.597z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.25 19.165v-5.233l.39.391a4.75 4.75 0 0 0 6.718 0l.392-.391v5.233c0 2.02-1.72 3.585-3.75 3.585s-3.75-1.566-3.75-3.585m4.647.712a1.25 1.25 0 0 0-1.781-1.754l-.007.006a1.25 1.25 0 0 0 1.782 1.754z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Wrench_02;
