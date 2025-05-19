import React from "react";
const Chemistry_01: React.FC<
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
        d="M22 9.5h-5v-2h5zm-11 0H2v-2h9z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 20.5v-18h2v17h16v2H5a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M17.75 4.5H19v-2H9v2h1.25v9.786c0 2.14 1.63 3.964 3.75 3.964s3.75-1.824 3.75-3.964z"
      />
    </svg>
  );
};
export default Chemistry_01;
