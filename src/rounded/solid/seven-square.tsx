import React from "react";
const SevenSquare: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="M17.809 1.93c-1.343-.18-3.064-.18-5.255-.18s-4.025 0-5.369.18c-1.377.186-2.469.573-3.327 1.43-.858.86-1.245 1.951-1.43 3.328-.18 1.343-.18 3.178-.18 5.37 0 2.19-.001 3.91.18 5.254.185 1.377.572 2.469 1.43 3.327s1.95 1.245 3.327 1.43c1.344.181 3.179.181 5.37.181 2.19 0 3.91 0 5.254-.18 1.377-.186 2.469-.573 3.327-1.43.858-.86 1.245-1.951 1.43-3.328.181-1.343.181-3.064.181-5.255s0-4.026-.18-5.369c-.186-1.377-.573-2.469-1.43-3.327-.859-.858-1.951-1.245-3.328-1.43M9.497 6a1 1 0 0 0 0 2h4.704l-3.626 8.612a1 1 0 0 0 1.844.776l3.967-9.423A1.417 1.417 0 0 0 15.081 6z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SevenSquare;
