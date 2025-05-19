import React from "react";
const PlusMinusSquare_01: React.FC<
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
        d="M17.312 1.93c-1.343-.18-3.064-.18-5.255-.18h-.114c-2.19 0-3.912 0-5.255.18-1.377.186-2.469.573-3.327 1.43-.858.86-1.245 1.951-1.43 3.328-.181 1.343-.181 3.064-.181 5.255v.114c0 2.19 0 3.912.18 5.255.186 1.377.573 2.469 1.43 3.327.86.858 1.951 1.245 3.328 1.43 1.343.181 3.064.181 5.255.181h.114c2.19 0 3.912 0 5.255-.18 1.377-.186 2.469-.573 3.327-1.43.858-.86 1.245-1.951 1.43-3.328.181-1.343.181-3.064.181-5.255v-.114c0-2.19 0-3.912-.18-5.255-.186-1.377-.573-2.469-1.43-3.327-.86-.858-1.951-1.245-3.328-1.43M13 7a1 1 0 1 0-2 0v2.182H8.5a1 1 0 1 0 0 2H11v2.182a1 1 0 1 0 2 0v-2.182h2.5a1 1 0 1 0 0-2H13zm-4.5 9a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PlusMinusSquare_01;
