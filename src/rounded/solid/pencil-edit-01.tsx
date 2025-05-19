import React from "react";
const PencilEdit_01: React.FC<
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
        d="M10 19.75a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1M14.154 5.982l-7.785 7.784c-.968.969-1.56 1.56-1.967 2.29-.227.406-.426 1.022-.601 1.653-.181.649-.359 1.396-.529 2.108l-.002.01a.75.75 0 0 0 .904.902l.008-.002c.714-.17 1.46-.347 2.109-.528.63-.175 1.247-.374 1.654-.6.728-.408 1.32-1 2.289-1.968l7.784-7.785zm4.925 2.803.87-.87a2.732 2.732 0 1 0-3.864-3.865l-.87.871z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PencilEdit_01;
