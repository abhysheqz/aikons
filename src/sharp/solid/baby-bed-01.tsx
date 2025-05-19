import React from "react";
const BabyBed_01: React.FC<
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
        d="M7 15.5v-8h2v8zm4 0v-8h2v8zm4 0v-8h2v8zM3 5.5H2v-2h3v17H3zm16-2h3v2h-1v15h-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20 8.5H4v-2h16z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M4 14.5h16v4H4z" />
    </svg>
  );
};
export default BabyBed_01;
