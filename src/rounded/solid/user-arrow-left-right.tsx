import React from "react";
const UserArrowLeftRight: React.FC<
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
        d="M10.245 12.95A7.75 7.75 0 0 0 4.25 20.5c0 .414.336.75.75.75h14a.75.75 0 0 0 .75-.75 7.75 7.75 0 0 0-5.995-7.55A5.252 5.252 0 0 0 12 2.75a5.25 5.25 0 0 0-1.755 10.2"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M18.486 5.355a1 1 0 0 1 1.41-.119l1.433 1.21c.332.281.654.554.886.81.253.28.535.687.535 1.244s-.282.964-.535 1.244c-.232.256-.554.529-.886.81l-1.434 1.21a1 1 0 0 1-1.29-1.528L20.637 8.5l-2.032-1.736a1 1 0 0 1-.119-1.41M5.514 5.355a1 1 0 0 1-.119 1.409L3.363 8.5l2.032 1.736a1 1 0 1 1-1.29 1.528l-1.434-1.21c-.332-.281-.654-.554-.886-.81-.253-.28-.535-.687-.535-1.244s.282-.964.535-1.245c.232-.255.554-.528.886-.808l1.434-1.211a1 1 0 0 1 1.409.119"
      />
    </svg>
  );
};
export default UserArrowLeftRight;
