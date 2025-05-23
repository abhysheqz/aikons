import React from "react";
const Wanted: React.FC<
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
        d="M15 14.5v.75a.75.75 0 0 0 .75-.75zm-6 0h-.75c0 .414.336.75.75.75zM12.75 8a.75.75 0 0 1-.75.75v1.5A2.25 2.25 0 0 0 14.25 8zm-.75.75a.75.75 0 0 1-.75-.75h-1.5A2.25 2.25 0 0 0 12 10.25zM11.25 8a.75.75 0 0 1 .75-.75v-1.5A2.25 2.25 0 0 0 9.75 8zm.75-.75a.75.75 0 0 1 .75.75h1.5A2.25 2.25 0 0 0 12 5.75zm3 6.5H9v1.5h6zm-5.25.75A2.25 2.25 0 0 1 12 12.25v-1.5a3.75 3.75 0 0 0-3.75 3.75zM12 12.25a2.25 2.25 0 0 1 2.25 2.25h1.5A3.75 3.75 0 0 0 12 10.75z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M15 17.5H9"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m4.436 18.17-1.183 3.154a.5.5 0 0 0 .468.676h14.863a1 1 0 0 0 1-1V5.228a1 1 0 0 1 .095-.426l.985-2.089A.5.5 0 0 0 20.21 2H5.5a1 1 0 0 0-1 1v2.723a1 1 0 0 0 .143.515L5.69 7.985a1 1 0 0 1 0 1.03l-1.048 1.747a1 1 0 0 0-.143.515v6.542a1 1 0 0 1-.064.35Z"
      />
    </svg>
  );
};
export default Wanted;
