import React from "react";
const StarFace: React.FC<
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
        d="M6.716 5.182a.313.313 0 0 1 .568 0l.697 1.43a.32.32 0 0 0 .234.177l1.516.252c.257.043.36.371.176.564L8.82 8.74a.34.34 0 0 0-.089.287l.24 1.586c.04.27-.228.472-.46.349l-1.367-.727a.3.3 0 0 0-.29 0l-1.367.727c-.232.123-.5-.08-.46-.348l.24-1.587a.34.34 0 0 0-.09-.287L4.094 7.605c-.183-.193-.08-.521.176-.564l1.516-.252a.32.32 0 0 0 .234-.178zM16.716 5.182a.313.313 0 0 1 .568 0l.697 1.43a.32.32 0 0 0 .234.177l1.516.252c.257.043.36.371.176.564L18.822 8.74a.34.34 0 0 0-.09.287l.24 1.586c.04.27-.228.472-.46.349l-1.367-.727a.3.3 0 0 0-.29 0l-1.367.727c-.232.123-.5-.08-.46-.348l.24-1.587a.34.34 0 0 0-.09-.287l-1.085-1.136c-.183-.193-.08-.521.176-.564l1.516-.252a.32.32 0 0 0 .234-.178z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12m6.5-9.37A10 10 0 0 1 12 2c1.231 0 2.41.223 3.5.63"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 15a5 5 0 0 0 4 2 5 5 0 0 0 4-2"
      />
    </svg>
  );
};
export default StarFace;
