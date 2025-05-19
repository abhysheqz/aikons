import React from "react";
const Mortarboard_01: React.FC<
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
        d="M19.25 16.823V9h1.5v7.823l1.92 3.842A.75.75 0 0 1 22 21.75h-4a.75.75 0 0 1-.67-1.085zM5.543 12.096l.751 5.26.18.177c2.983 2.956 8.072 2.956 11.055 0l.179-.178.752-5.26-6.46 3.23z"
      />
    </svg>
  );
};
export default Mortarboard_01;
