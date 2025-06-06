import React from "react";
const ApproximatelyEqualSquare: React.FC<
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
        d="M17.312 1.93c-1.343-.18-3.064-.18-5.255-.18h-.114c-2.19 0-3.912 0-5.255.18-1.377.186-2.469.573-3.327 1.43-.858.86-1.245 1.951-1.43 3.328-.181 1.343-.181 3.064-.181 5.255v.114c0 2.19 0 3.912.18 5.255.186 1.377.573 2.469 1.43 3.327.86.858 1.951 1.245 3.328 1.43 1.343.181 3.064.181 5.255.181h.114c2.19 0 3.912 0 5.255-.18 1.377-.186 2.469-.573 3.327-1.43.858-.86 1.245-1.951 1.43-3.328.181-1.343.181-3.064.181-5.255v-.114c0-2.19 0-3.912-.18-5.255-.186-1.377-.573-2.469-1.43-3.327-.86-.858-1.951-1.245-3.328-1.43M7.768 9.926c.687-.824 1.222-.958 1.637-.919.511.049 1.145.385 1.935 1.08.876.768 1.91 1.456 3.065 1.566 1.252.119 2.384-.454 3.363-1.63a1 1 0 1 0-1.536-1.28c-.687.824-1.222.958-1.637.919-.51-.049-1.145-.385-1.935-1.079-.876-.769-1.91-1.457-3.065-1.567-1.252-.119-2.384.454-3.363 1.63a1 1 0 0 0 1.536 1.28m0 5.333c.687-.824 1.222-.958 1.637-.918.511.048 1.145.385 1.935 1.078.876.77 1.91 1.457 3.065 1.567 1.252.119 2.384-.454 3.363-1.63a1 1 0 1 0-1.536-1.28c-.687.824-1.222.958-1.637.919-.51-.049-1.145-.385-1.935-1.079-.876-.769-1.91-1.456-3.065-1.566-1.252-.12-2.384.454-3.363 1.629a1 1 0 1 0 1.536 1.28"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ApproximatelyEqualSquare;
