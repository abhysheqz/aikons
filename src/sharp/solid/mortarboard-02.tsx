import React from "react";
const Mortarboard_02: React.FC<
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
        d="M22.335 7.418a.75.75 0 0 1 0 1.341L12 13.927 1.665 8.76a.75.75 0 0 1 0-1.341L12 2.25z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.251 10.5h1.5v5.037L12 17.66l4.249-2.125V10.5h1.5v5.964L12 19.339l-5.75-2.875z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M19.25 16.823V9h1.5v7.823l1.92 3.842A.75.75 0 0 1 22 21.75h-4a.75.75 0 0 1-.67-1.085z"
      />
    </svg>
  );
};
export default Mortarboard_02;
