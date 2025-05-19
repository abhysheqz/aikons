import React from "react";
const ZeroSquare: React.FC<
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
        d="M17.312 1.93c-1.343-.18-3.179-.18-5.37-.18-2.19 0-3.91 0-5.254.18-1.377.186-2.469.573-3.327 1.43-.858.86-1.245 1.951-1.43 3.328-.181 1.343-.181 3.064-.181 5.255s0 4.026.18 5.369c.186 1.377.573 2.469 1.43 3.327.86.858 1.951 1.245 3.328 1.43 1.343.181 3.064.181 5.255.181s4.026 0 5.369-.18c1.377-.186 2.469-.573 3.327-1.43.858-.86 1.245-1.951 1.43-3.328.181-1.343.181-3.064.181-5.255s0-4.026-.18-5.369c-.186-1.377-.573-2.469-1.43-3.327-.86-.858-1.951-1.245-3.328-1.43M10 10a2 2 0 1 1 4 0v4a2 2 0 1 1-4 0zm2-4a4 4 0 0 0-4 4v4a4 4 0 0 0 8 0v-4a4 4 0 0 0-4-4"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ZeroSquare;
