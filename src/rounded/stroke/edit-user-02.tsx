import React from "react";
const EditUser_02: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 8.5a5 5 0 1 0-10 0 5 5 0 0 0 10 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 20.5a7 7 0 1 0-14 0M21.689 7.934l-.623-.623a1.063 1.063 0 0 0-1.503 0l-3.142 3.253A1.5 1.5 0 0 0 16 11.606V13h1.394a1.5 1.5 0 0 0 1.042-.421l3.253-3.142a1.063 1.063 0 0 0 0-1.503"
      />
    </svg>
  );
};
export default EditUser_02;
